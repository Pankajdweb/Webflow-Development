'use client';

import { useState } from 'react';
import styles from '../page.module.css';
import RichTextEditor from './RichTextEditor';

interface EditItemModalProps {
  item: any;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: any) => void;
}

export default function EditItemModal({ item, isOpen, onClose, onSave }: EditItemModalProps) {
  // Helper function to convert date format for HTML date input
  const formatDateForInput = (dateString: string) => {
    if (!dateString) return '';
    
    // If it's already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    
    // Try to parse different date formats
    const date = new Date(dateString);
    if (!isNaN(date.getTime())) {
      return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD
    }
    
    return '';
  };

  const [formData, setFormData] = useState({
    name: item?.fieldData?.name || item?.name || '',
    summary: item?.fieldData?.summary || '',
    'ready-to-publish': item?.fieldData?.['ready-to-publish'] || false,
    'open-date': formatDateForInput(item?.fieldData?.['open-date'] || ''),
    'close-date': formatDateForInput(item?.fieldData?.['close-date'] || ''),
    duration: item?.fieldData?.duration || '',
    'funding-body': item?.fieldData?.['funding-body'] || '',
    'award-value': item?.fieldData?.['award-value'] || '',
    'grants-thumbnail-image': item?.fieldData?.['grants-thumbnail-image'] || '',
    'main-body': item?.fieldData?.['main-body'] || '',
    'meta-title': item?.fieldData?.['meta-title'] || '',
    'meta-description': item?.fieldData?.['meta-description'] || '',
    url: item?.fieldData?.url || '',
    order: item?.fieldData?.order || 0
  });
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

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

  const handleSave = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/collection/items/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fieldData: formData
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
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            ×
          </button>
        </div>
        
        <div className={styles.modalBody}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Title:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="summary">Short Description:</label>
            <textarea
              id="summary"
              value={formData.summary}
              onChange={(e) => handleInputChange('summary', e.target.value)}
              className={styles.formTextarea}
              rows={3}
            />
          </div>



          <div className={styles.formGroup}>
            <label htmlFor="open-date">Opening Date:</label>
            <input
              type="date"
              id="open-date"
              value={formData['open-date']}
              onChange={(e) => handleInputChange('open-date', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="close-date">Closing Date:</label>
            <input
              type="date"
              id="close-date"
              value={formData['close-date']}
              onChange={(e) => handleInputChange('close-date', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="duration">Duration:</label>
            <input
              type="text"
              id="duration"
              value={formData.duration}
              onChange={(e) => handleInputChange('duration', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="funding-body">Funding Body:</label>
            <input
              type="text"
              id="funding-body"
              value={formData['funding-body']}
              onChange={(e) => handleInputChange('funding-body', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="award-value">Award Value:</label>
            <input
              type="text"
              id="award-value"
              value={formData['award-value']}
              onChange={(e) => handleInputChange('award-value', e.target.value)}
              className={styles.formInput}
            />
          </div>




          <div className={styles.formGroup}>
            <label htmlFor="main-body">Grants Body:</label>
            <RichTextEditor
              value={formData['main-body']}
              onChange={(value) => handleInputChange('main-body', value)}
            />
          </div>



          <div className={styles.formGroup}>
            <label htmlFor="order">Order (for sorting):</label>
            <input
              type="number"
              id="order"
              value={formData.order}
              onChange={(e) => handleInputChange('order', e.target.value)}
              className={styles.formInput}
              min="0"
              step="1"
            />
          </div>
          


          <div className={styles.formGroup}>
            <label htmlFor="meta-title">Meta Title:</label>
            <input
              type="text"
              id="meta-title"
              value={formData['meta-title']}
              onChange={(e) => handleInputChange('meta-title', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="meta-description">Meta Description:</label>
            <textarea
              id="meta-description"
              value={formData['meta-description']}
              onChange={(e) => handleInputChange('meta-description', e.target.value)}
              className={styles.formTextarea}
              rows={2}
            />
          </div>


          
          <div className={styles.formGroup}>
            <label htmlFor="grants-thumbnail-image">Grants Thumbnail Image URL:</label>
            <input
              type="url"
              id="grants-thumbnail-image"
              value={formData['grants-thumbnail-image']}
              onChange={(e) => handleInputChange('grants-thumbnail-image', e.target.value)}
              className={styles.formInput}
            />
          </div>


          
          <div className={styles.formGroup}>
            <label htmlFor="url">URL:</label>
            <input
              type="url"
              id="url"
              value={formData.url}
              onChange={(e) => handleInputChange('url', e.target.value)}
              className={styles.formInput}
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