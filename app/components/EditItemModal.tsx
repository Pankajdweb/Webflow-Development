'use client';

import { useState } from 'react';
import styles from '../page.module.css';

interface EditItemModalProps {
  item: any;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: any) => void;
  collectionId: string;
}

export default function EditItemModal({ item, isOpen, onClose, onSave, collectionId }: EditItemModalProps) {
  const [formData, setFormData] = useState({
    name: item?.fieldData?.name || item?.name || '',
    'summary': item?.fieldData?.summary || '',
    'ready-to-publish': item?.fieldData?.['ready-to-publish'] || false,
    // Add more fields as needed
  });
  const [isDraft, setIsDraft] = useState(!item?.isLive); // true if item is not live (draft)
  const [isLoading, setIsLoading] = useState(false);
  const [isScraping, setIsScraping] = useState(false);
  const [scrapeUrl, setScrapeUrl] = useState('');
  const [scrapeError, setScrapeError] = useState('');

  if (!isOpen) return null;

  // Determine if item is currently live/published
  const isCurrentlyLive = item?.isLive === true;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSwitchChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleToggleDraft = () => {
    setIsDraft(!isDraft);
  };

  const handleScrapeData = async () => {
    if (!scrapeUrl.trim()) {
      setScrapeError('Please enter a URL to scrape');
      return;
    }

    setIsScraping(true);
    setScrapeError('');

    try {
      const apiKey = "633fbe32ec06f47512978e9b2607286d";
      const proxyUrl = `https://api.scraperapi.com/?api_key=${apiKey}&url=${encodeURIComponent(scrapeUrl)}`;

      const response = await fetch(proxyUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to scrape data: ${response.status} ${response.statusText}`);
      }

      const htmlContent = await response.text();
      
      // Parse the HTML content to extract data
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      
      // Extract title (for name field)
      const title = doc.querySelector('title')?.textContent || 
                   doc.querySelector('h1')?.textContent || 
                   doc.querySelector('h2')?.textContent || '';
      
      // Extract meta description (for summary field)
      const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      // Extract first paragraph or content
      const firstParagraph = doc.querySelector('p')?.textContent || '';
      
      // Update form data with scraped content
      setFormData(prev => ({
        ...prev,
        name: title.trim() || prev.name,
        'summary': metaDescription.trim() || firstParagraph.trim() || prev.summary
      }));

      setScrapeUrl(''); // Clear the URL input after successful scrape
    } catch (error) {
      console.error('Error scraping data:', error);
      setScrapeError('Failed to scrape data. Please check the URL and try again.');
    } finally {
      setIsScraping(false);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/collection/${collectionId}/items/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fieldData: formData,
          isDraft: isDraft
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      const updatedItem = await response.json();
      onSave(updatedItem);
      onClose();
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update item. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <h3>Edit Item</h3>
            <div className={styles.statusIndicator}>
              <span className={`${styles.statusBadge} ${isCurrentlyLive ? styles.published : styles.draft}`}>
                {isCurrentlyLive ? 'Published' : 'Draft'}
              </span>
            </div>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            ×
          </button>
        </div>
        
        <div className={styles.modalBody}>
          {/* Scraping Section */}
          <div className={styles.scrapingSection}>
            <h4>Scrape Data from URL</h4>
            <div className={styles.scrapeInputGroup}>
              <input
                type="url"
                placeholder="Enter URL to scrape data from..."
                value={scrapeUrl}
                onChange={(e) => setScrapeUrl(e.target.value)}
                className={styles.scrapeInput}
                disabled={isScraping}
              />
              <button
                onClick={handleScrapeData}
                className={styles.scrapeButton}
                disabled={isScraping || !scrapeUrl.trim()}
              >
                {isScraping ? 'Scraping...' : 'Scrape Data'}
              </button>
            </div>
            {scrapeError && (
              <p className={styles.scrapeError}>{scrapeError}</p>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={styles.formInput}
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="summary">Summary:</label>
            <textarea
              id="summary"
              value={formData?.summary}
              onChange={(e) => handleInputChange('summary', e.target.value)}
              className={styles.formTextarea}
              rows={4}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.switchLabel}>
              <span>Ready To Publish:</span>
              <div className={styles.switchContainer}>
                <input
                  type="checkbox"
                  id="ready-to-publish"
                  checked={formData['ready-to-publish']}
                  onChange={(e) => handleSwitchChange('ready-to-publish', e.target.checked)}
                  className={styles.switchInput}
                  disabled={isLoading}
                />
                <label htmlFor="ready-to-publish" className={styles.switchToggle}>
                  <span className={styles.switchSlider}></span>
                </label>
              </div>
            </label>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.toggleLabel}>
              <span>Item Status:</span>
              <div className={styles.toggleContainer}>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${isDraft ? styles.active : ''}`}
                  onClick={handleToggleDraft}
                  disabled={isLoading}
                >
                  Draft
                </button>
                <button
                  type="button"
                  className={`${styles.toggleButton} ${!isDraft ? styles.active : ''}`}
                  onClick={handleToggleDraft}
                  disabled={isLoading}
                >
                  Published
                </button>
              </div>
            </label>
          </div>
        </div>
        
        <div className={styles.modalFooter}>
          <button onClick={onClose} className={styles.cancelButton}>
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            className={styles.saveButton}
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
} 