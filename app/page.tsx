import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

async function getData() {
  const res = await fetch('http://localhost:3000/api/example', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <div className={styles.apiData}>
          <h2>Webflow Collection Data</h2>
          <div className={styles.items}>
            {data.collections?.map((item: any) => (
              <Link 
                href={`/collection/${item.id}`} 
                key={item.id} 
                className={styles.itemLink}
              >
                <div className={styles.item}>
                  <h3>{item.displayName || 'Untitled'}</h3>
                  {item.slug && <p>Slug: {item.slug}</p>}
                  {item.updated_on && (
                    <p>Last Updated: {new Date(item.updated_on).toLocaleDateString()}</p>
                  )}
                  <p className={styles.status}>Status: {item._archived ? 'Archived' : 'Active'}</p>
                </div>
              </Link>
            ))}
          </div>
          {!data.collections && (
            <p className={styles.error}>No items found in the collection</p>
          )}
        </div>

     
      </main>

    </div>
  );
}
