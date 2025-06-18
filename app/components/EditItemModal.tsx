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
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSave = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/collection/${collectionId}/items/${item.id}`, {
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