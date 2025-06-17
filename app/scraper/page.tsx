'use client';

import { useState, useEffect } from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

export default function ScraperPage() {
  const [scrapeUrl, setScrapeUrl] = useState('');
  const [isScraping, setIsScraping] = useState(false);
  const [isSendingToCMS, setIsSendingToCMS] = useState(false);
  const [scrapeError, setScrapeError] = useState('');
  const [cmsMessage, setCmsMessage] = useState('');
  const [scrapedData, setScrapedData] = useState({
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    author: '',
    publishedDate: ''
  });
  const [collectionFields, setCollectionFields] = useState<any>(null);

  // Fetch collection structure on component mount
  useEffect(() => {
    const fetchCollectionStructure = async () => {
      try {
        const collectionId = "684041261ac1bc47be79aa14";
        const response = await fetch(`/api/collection/${collectionId}`);
        if (response.ok) {
          const data = await response.json();
          setCollectionFields(data.collection?.fields || []);
        }
      } catch (error) {
        console.error('Error fetching collection structure:', error);
      }
    };

    fetchCollectionStructure();
  }, []);

  const handleScrapeData = async () => {
    if (!scrapeUrl.trim()) {
      setScrapeError('Please enter a URL to scrape');
      return;
    }

    setIsScraping(true);
    setScrapeError('');
    setCmsMessage('');

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
      
      // Extract various data points
      const title = doc.querySelector('title')?.textContent || 
                   doc.querySelector('h1')?.textContent || 
                   doc.querySelector('h2')?.textContent || '';
      
      const metaDescription = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      
      const ogDescription = doc.querySelector('meta[property="og:description"]')?.getAttribute('content') || '';
      
      const content = doc.querySelector('article')?.textContent || 
                     doc.querySelector('.content')?.textContent || 
                     doc.querySelector('main')?.textContent || 
                     doc.querySelector('p')?.textContent || '';
      
      const imageUrl = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || 
                      doc.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || 
                      doc.querySelector('img')?.getAttribute('src') || '';
      
      const author = doc.querySelector('meta[name="author"]')?.getAttribute('content') || 
                    doc.querySelector('.author')?.textContent || 
                    doc.querySelector('[rel="author"]')?.textContent || '';
      
      const publishedDate = doc.querySelector('meta[property="article:published_time"]')?.getAttribute('content') || 
                           doc.querySelector('time')?.getAttribute('datetime') || 
                           doc.querySelector('.date')?.textContent || '';
      
      // Update scraped data
      setScrapedData({
        title: title.trim(),
        description: metaDescription.trim() || ogDescription.trim(),
        content: content.trim().substring(0, 500) + (content.length > 500 ? '...' : ''),
        imageUrl: imageUrl,
        author: author.trim(),
        publishedDate: publishedDate.trim()
      });

    } catch (error) {
      console.error('Error scraping data:', error);
      setScrapeError('Failed to scrape data. Please check the URL and try again.');
    } finally {
      setIsScraping(false);
    }
  };

  const handleSendToCMS = async () => {
    if (!scrapedData.title && !scrapedData.description) {
      setCmsMessage('Please scrape some data first before sending to CMS');
      return;
    }

    setIsSendingToCMS(true);
    setCmsMessage('');

    try {
      const collectionId = "684041261ac1bc47be79aa14";
      
      const response = await fetch(`/api/collection/${collectionId}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fieldData: {
            name: scrapedData.title || 'Scraped Content',
            summary: scrapedData.description || scrapedData.content || 'No description available',
            'ready-to-publish': true
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        let errorMessage = `Failed to create item: ${response.status} ${response.statusText}`;
        
        try {
          const errorJson = JSON.parse(errorData);
          if (errorJson.details) {
            errorMessage += ` - ${errorJson.details}`;
          }
        } catch (e) {
          errorMessage += ` - ${errorData}`;
        }
        
        throw new Error(errorMessage);
      }

      const newItem = await response.json();
      setCmsMessage(`✅ Successfully created item in CMS! Item ID: ${newItem.id}`);
      
      // Clear the form after successful creation
      setTimeout(() => {
        handleClearData();
        setCmsMessage('');
      }, 3000);

    } catch (error) {
      console.error('Error creating item:', error);
      setCmsMessage(`❌ Failed to create item: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSendingToCMS(false);
    }
  };

  const handleClearData = () => {
    setScrapedData({
      title: '',
      description: '',
      content: '',
      imageUrl: '',
      author: '',
      publishedDate: ''
    });
    setScrapeUrl('');
    setScrapeError('');
    setCmsMessage('');
  };

  const getCmsMessageClass = () => {
    if (cmsMessage.includes('✅')) return styles.success;
    if (cmsMessage.includes('❌')) return styles.error;
    return '';
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.backButton}>
          ← Back to Collections
        </Link>
        
        <div className={styles.scraperContainer}>
          <h1>Web Scraper</h1>
          <p className={styles.scraperDescription}>
            Enter a URL to scrape content and extract useful data for your Webflow items.
          </p>

          {/* Debug Collection Fields */}
          {collectionFields && (
            <div className={styles.debugSection}>
              <h3>Available Collection Fields:</h3>
              <div className={styles.fieldsList}>
                {collectionFields.map((field: any, index: number) => (
                  <div key={index} className={styles.fieldItem}>
                    <strong>{field.displayName}</strong> ({field.slug}) - {field.type}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scraping Input Section */}
          <div className={styles.scrapingSection}>
            <h2>Scrape Data from URL</h2>
            <div className={styles.scrapeInputGroup}>
              <input
                type="url"
                placeholder="Enter URL to scrape data from (e.g., https://example.com/article)"
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

          {/* Scraped Data Display */}
          {(scrapedData.title || scrapedData.description || scrapedData.content) && (
            <div className={styles.scrapedDataSection}>
              <div className={styles.sectionHeader}>
                <h2>Scraped Data</h2>
                <button onClick={handleClearData} className={styles.clearButton}>
                  Clear Data
                </button>
              </div>
              
              <p className={styles.editInstructions}>
                Review and edit the scraped data below before sending to CMS:
              </p>
              
              <div className={styles.dataGrid}>
                <div className={styles.dataField}>
                  <label>Title:</label>
                  <input
                    type="text"
                    value={scrapedData.title}
                    onChange={(e) => setScrapedData(prev => ({ ...prev, title: e.target.value }))}
                    className={styles.dataInput}
                    placeholder="Edit title..."
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Description:</label>
                  <textarea
                    value={scrapedData.description}
                    onChange={(e) => setScrapedData(prev => ({ ...prev, description: e.target.value }))}
                    className={styles.dataTextarea}
                    placeholder="Edit description..."
                    rows={3}
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Content Preview:</label>
                  <textarea
                    value={scrapedData.content}
                    onChange={(e) => setScrapedData(prev => ({ ...prev, content: e.target.value }))}
                    className={styles.dataTextarea}
                    placeholder="Edit content..."
                    rows={4}
                  />
                </div>

                {scrapedData.imageUrl && (
                  <div className={styles.dataField}>
                    <label>Image URL:</label>
                    <input
                      type="url"
                      value={scrapedData.imageUrl}
                      onChange={(e) => setScrapedData(prev => ({ ...prev, imageUrl: e.target.value }))}
                      className={styles.dataInput}
                      placeholder="Edit image URL..."
                    />
                  </div>
                )}

                {scrapedData.author && (
                  <div className={styles.dataField}>
                    <label>Author:</label>
                    <input
                      type="text"
                      value={scrapedData.author}
                      onChange={(e) => setScrapedData(prev => ({ ...prev, author: e.target.value }))}
                      className={styles.dataInput}
                      placeholder="Edit author..."
                    />
                  </div>
                )}

                {scrapedData.publishedDate && (
                  <div className={styles.dataField}>
                    <label>Published Date:</label>
                    <input
                      type="text"
                      value={scrapedData.publishedDate}
                      onChange={(e) => setScrapedData(prev => ({ ...prev, publishedDate: e.target.value }))}
                      className={styles.dataInput}
                      placeholder="Edit published date..."
                    />
                  </div>
                )}
              </div>

              {/* Send to CMS Button */}
              <div className={styles.cmsSection}>
                <button
                  onClick={handleSendToCMS}
                  className={styles.sendToCMSButton}
                  disabled={isSendingToCMS}
                >
                  {isSendingToCMS ? 'Creating Item...' : 'Send Data to CMS'}
                </button>
                {cmsMessage && (
                  <p className={`${styles.cmsMessage} ${getCmsMessageClass()}`}>{cmsMessage}</p>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 