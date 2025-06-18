'use client';

import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import EditItemModal from "../../components/EditItemModal";

async function getCollectionItems(id: string) {
  const res = await fetch(`http://localhost:3000/api/collection/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch collection items');
  }
  return res.json();
}

export default function CollectionPage({ params }: { params: { id: string } }) {
  const [data, setData] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCollectionItems(params.id);
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleSave = (updatedItem: any) => {
    setData((prev: any) => ({
      ...prev,
      items: prev.items.map((item: any) => 
        item.id === updatedItem.id ? updatedItem : item
      )
    }));
  };

  if (isLoading) {
    return <div className={styles.page}>Loading...</div>;
  }

  if (!data) {
    return <div className={styles.page}>Error loading data</div>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.backButton}>
          ← Back to Collections
        </Link>
        
        <div className={styles.apiData}>
          <h2>{data.collection?.displayName}</h2>
          <div className={styles.items}>
            {data.items?.map((item: any) => (
              <div 
                key={item.id} 
                className={styles.item}
                onClick={() => handleItemClick(item)}
                style={{ cursor: 'pointer' }}
              >
                <h3>{item.fieldData?.name || item.name || item.displayName || 'Untitled'}</h3>
                {item.fieldData?.["faq-answer"] && <p>FAQ Answer: {item.fieldData["faq-answer"]}</p>}
                {item.fieldData?.summary && <p>Summary: {item.fieldData?.summary}</p>}
                {item.fieldData?.["ready-to-publish"] !== undefined && (
                  <p className={styles.readyStatus}>
                    Ready To Publish: 
                    <span className={`${styles.statusBadge} ${item.fieldData["ready-to-publish"] ? styles.published : styles.draft}`}>
                      {item.fieldData["ready-to-publish"] ? 'Yes' : 'No'}
                    </span>
                  </p>
                )}
                {item.slug && <p>Slug: {item.slug}</p>}
                {item.created_on && (
                  <p>Created: {new Date(item.created_on).toLocaleDateString()}</p>
                )}
                {item.updated_on && (
                  <p>Updated: {new Date(item.updated_on).toLocaleDateString()}</p>
                )}
              </div>
            ))}
          </div>
          {!data.items && (
            <p className={styles.error}>No items found in this collection</p>
          )}
        </div>

        {selectedItem && (
          <EditItemModal
            item={selectedItem}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedItem(null);
            }}
            onSave={handleSave}
            collectionId={params.id}
          />
        )}
      </main>
    </div>
  );
} 