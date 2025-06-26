'use client';

import { useState, useEffect } from 'react';
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
    'client-stories-summary': item?.fieldData?.['client-stories-summary'] || '',
    opens: formatDateForInput(item?.fieldData?.['opens'] || ''),
    closes: formatDateForInput(item?.fieldData?.['closes'] || ''),
    'deadline-text': item?.fieldData?.['deadline-text'] || '',
    'funding-body': item?.fieldData?.['funding-body'] || '',
    'award-value': item?.fieldData?.['award-value'] || '',
    'client-stories-thumbnail-image': item?.fieldData?.['client-stories-thumbnail-image'] || '',
    'client-stories-body': item?.fieldData?.['client-stories-body'] || '',
    'meta-title': item?.fieldData?.['meta-title'] || '',
    'meta-description': item?.fieldData?.['meta-description'] || '',
    'url-5': item?.fieldData?.['url-5'] || '',
    order: item?.fieldData?.order || 0,
   
  });
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the reference collection
    async function fetchCategories() {
      try {
        const response = await fetch('/api/categories');
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data.items || []);
      } catch (err) {
        setCategories([]);
      }
    }
    fetchCategories();
  }, []);

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
        const errorText = await response.text();
        console.error('Failed to update item:', response.status, errorText);
        throw new Error(`Failed to update item: ${response.status} ${errorText}`);
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
            <label htmlFor="client-stories-summary">Short Description:</label>
            <textarea
              id="client-stories-summary"
              value={formData['client-stories-summary']}
              onChange={(e) => handleInputChange('client-stories-summary', e.target.value)}
              className={styles.formTextarea}
              rows={3}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="opens">Opening Date:</label>
            <input
              type="date"
              id="opens"
              value={formData['opens']}
              onChange={(e) => handleInputChange('opens', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="closes">Closing Date:</label>
            <input
              type="date"
              id="closes"
              value={formData['closes']}
              onChange={(e) => handleInputChange('closes', e.target.value)}
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
            <label htmlFor="client-stories-thumbnail-image">Thumbnail Image URL:</label>
            <input
              type="url"
              id="client-stories-thumbnail-image"
              value={formData['client-stories-thumbnail-image']}
              onChange={(e) => handleInputChange('client-stories-thumbnail-image', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="client-stories-body">Main Body:</label>
            <RichTextEditor
              value={formData['client-stories-body']}
              onChange={(value) => handleInputChange('client-stories-body', value)}
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
            <label htmlFor="url-5">URL:</label>
            <input
              type="url"
              id="url-5"
              value={formData['url-5']}
              onChange={(e) => handleInputChange('url-5', e.target.value)}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="deadline-text">Duration:</label>
            <input
              type="text"
              id="deadline-text"
              value={formData['deadline-text']}
              onChange={(e) => handleInputChange('deadline-text', e.target.value)}
              className={styles.formInput}
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