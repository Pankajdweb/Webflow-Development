import Image from "next/image";
import styles from "../../page.module.css";
import Link from "next/link";

async function getCollectionItems(id: string) {
  const res = await fetch(`http://localhost:3000/api/collection/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch collection items');
  }
  return res.json();
}

export default async function CollectionPage({ params }: { params: { id: string } }) {
  const data = await getCollectionItems(params.id);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.backButton}>
          ← Back to Collections
        </Link>
        
        <div className={styles.apiData}>
          <h2>Collection Items</h2>
          <div className={styles.items}>
            {data.items?.map((item: any) => (
              <div key={item._id} className={styles.item}>
                <h3>{item.name || 'Untitled'}</h3>
                {item.slug && <p>Slug: {item.slug}</p>}
                {item.created_on && (
                  <p>Created: {new Date(item.created_on).toLocaleDateString()}</p>
                )}
                {item.updated_on && (
                  <p>Updated: {new Date(item.updated_on).toLocaleDateString()}</p>
                )}
                <p className={styles.status}>
                  Status: {item._archived ? 'Archived' : 'Active'}
                </p>
              </div>
            ))}
          </div>
          {!data.items && (
            <p className={styles.error}>No items found in this collection</p>
          )}
        </div>
      </main>
    </div>
  );
} 