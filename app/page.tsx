'use client';

import styles from "./page.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import EditItemModal from "./components/EditItemModal";

async function getCollectionItems() {
  const res = await fetch(`/api/collection`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch collection items');
  }
  return res.json();
}

// Helper function to format dates consistently
function formatDate(dateString: string) {
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '';
    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  } catch (error) {
    return '';
  }
}

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCollectionItems();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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

        
        <div className={styles.navigation}>
          <Link href="/scraper" className={styles.scraperLink}>
            🕷️ Web Scraper
          </Link>
        </div>
        
        <div className={styles.apiData}>
          <h2>{data.collection?.displayName || 'Grants Collection'}</h2>
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
                  <p>Created: {formatDate(item.created_on)}</p>
                )}
                {item.updated_on && (
                  <p>Updated: {formatDate(item.updated_on)}</p>
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
          />
        )}
      </main>
    </div>
  );
}
