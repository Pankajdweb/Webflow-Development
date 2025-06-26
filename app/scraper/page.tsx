"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Link from "next/link";
import RichTextEditor from "../components/RichTextEditor";
import { GlobalNavbar } from "@/devlink/GlobalNavbar";
import { FooterComponent } from "@/devlink/FooterComponent";

export default function ScraperPage() {
  const [scrapeUrl, setScrapeUrl] = useState("");
  const [isScraping, setIsScraping] = useState(false);
  const [isSendingToCMS, setIsSendingToCMS] = useState(false);
  const [scrapeError, setScrapeError] = useState("");
  const [cmsMessage, setCmsMessage] = useState("");
  const [scrapedData, setScrapedData] = useState({
    title: "",
    shortDescription: "",
    summary: "",
    eligibility: "",
    scope: "",
    imageUrl: "",
    openingDate: "",
    closingDate: "",
    duration: "",
    mainBody: "",
    fundingBody: "",
    awardValue: "",
    url: "",
    order: 0,
  });
  const [collectionFields, setCollectionFields] = useState<any>(null);

  // Fetch collection structure on component mount
  useEffect(() => {
    const fetchCollectionStructure = async () => {
      try {
        const response = await fetch(`/api/collection`);
        if (response.ok) {
          const data = await response.json();
          setCollectionFields(data.collection?.fields || []);
        }
      } catch (error) {
        console.error("Error fetching collection structure:", error);
      }
    };

    fetchCollectionStructure();
  }, []);

  // Helper function to combine summary, eligibility, and scope into formatted HTML
  const combineContentIntoHTML = (summary: string, eligibility: string, scope: string) => {
    let combinedHTML = '';
    
    if (summary && summary !== "No tabDatasummary available") {
      combinedHTML += `<h2>Summary</h2><p>${summary}</p>`;
    }
    
    if (eligibility && eligibility !== "No tabDataeligibility available") {
      combinedHTML += `<h2>Eligibility</h2><p>${eligibility}</p>`;
    }
    
    if (scope && scope !== "No tabDatascope available") {
      combinedHTML += `<h2>Scope</h2><p>${scope}</p>`;
    }
    
    return combinedHTML || '<p>No content available</p>';
  };

  const handleScrapeData = async () => {
    if (!scrapeUrl.trim()) {
      setScrapeError("Please enter a URL to scrape");
      return;
    }

    setIsScraping(true);
    setScrapeError("");
    setCmsMessage("");

    try {
      const apiKey = "633fbe32ec06f47512978e9b2607286d";
      const proxyUrl = `https://api.scraperapi.com/?api_key=${apiKey}&url=${encodeURIComponent(
        scrapeUrl
      )}`;

      const response = await fetch(proxyUrl);

      if (!response.ok) {
        throw new Error(
          `Failed to scrape data: ${response.status} ${response.statusText}`
        );
      }

      const htmlContent = await response.text();

      // Parse the HTML content to extract data
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, "text/html");

      // Extract title with span removal
      const titleEl = doc.querySelector("main h1.govuk-heading-l");
      let cleanTexth1 = "";

      if (titleEl) {
        // Remove the span manually from HTML
        const innerWithoutSpan = titleEl.innerHTML
          .replace(/<span[^>]*>.*?<\/span>/, "")
          .trim();

        // Create a temporary div to parse the cleaned string
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = innerWithoutSpan;
        cleanTexth1 = tempDiv.textContent?.trim() || "";
      }

      // Extract other elements
      const summaryEl = doc.querySelector("main p.govuk-body");
      const openEl = doc.querySelector("main ul.govuk-list li:first-child");
      const closeEl = doc.querySelector("main ul.govuk-list li:nth-child(2)");
      const tabEl = doc.querySelector("main #summary");
      const tabEligibility = doc.querySelector("main #eligibility");
      const tabScope = doc.querySelector("main #scope");

      const rawOpenDate = (openEl as HTMLElement)?.innerText?.trim() || "";
      const rawCloseDate = (closeEl as HTMLElement)?.innerText?.trim() || "";
      const openingDate = formatDateString(rawOpenDate);
      const closingDate = formatDateString(rawCloseDate);
      const durationText = calculateDurationMonths(openingDate, closingDate);

      const summary = (summaryEl as HTMLElement)?.innerText?.trim() || "";
      const tabDatasummary = (tabEl as HTMLElement)?.innerText?.trim() || "";
      const tabDataeligibility =
        (tabEligibility as HTMLElement)?.innerText?.trim() || "";
      const tabDatascope = (tabScope as HTMLElement)?.innerText?.trim() || "";

      // Update scraped data
      setScrapedData({
        title: cleanTexth1 || "Untitled",
        shortDescription: summary || "No description available",
        summary: tabDatasummary || "No tabDatasummary available",
        eligibility: tabDataeligibility || "No tabDataeligibility available",
        scope: tabDatascope || "No tabDatascope available",
        imageUrl: "",
        openingDate: openingDate || "No openingDate available",
        closingDate: closingDate || "No closingDate available",
        duration: durationText || "No duration available",
        mainBody: combineContentIntoHTML(tabDatasummary, tabDataeligibility, tabDatascope),
        fundingBody: "",
        awardValue: "",
        url: scrapeUrl,
        order: 0,
      });
    } catch (error) {
      console.error("Error scraping data:", error);
      setScrapeError(
        "Failed to scrape data. Please check the URL and try again."
      );
    } finally {
      setIsScraping(false);
    }
  };

  // Helper function to format date string
  const formatDateString = (dateString: string) => {
    if (!dateString) return "";

    // Extract date from strings like "Opens: 1 January 2024" or "Closes: 31 March 2024"
    const dateMatch = dateString.match(/(\d{1,2})\s+(\w+)\s+(\d{4})/);
    if (dateMatch) {
      const day = dateMatch[1].padStart(2, "0");
      const month = dateMatch[2];
      const year = dateMatch[3];

      // Convert month name to number
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const monthIndex = monthNames.findIndex(
        (m) => m.toLowerCase() === month.toLowerCase()
      );

      if (monthIndex !== -1) {
        const monthNumber = (monthIndex + 1).toString().padStart(2, "0");
        return `${year}-${monthNumber}-${day}`;
      }
    }
    return "";
  };

  // Helper function to calculate duration in months
  const calculateDurationMonths = (
    openingDate: string,
    closingDate: string
  ) => {
    if (!openingDate || !closingDate) return "";

    try {
      const open = new Date(openingDate);
      const close = new Date(closingDate);

      if (isNaN(open.getTime()) || isNaN(close.getTime())) return "";

      const diffTime = Math.abs(close.getTime() - open.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      const diffMonths = Math.ceil(diffDays / 30);

      return `${diffMonths} month${diffMonths !== 1 ? "s" : ""}`;
    } catch (error) {
      return "";
    }
  };

  const handleSendToCMS = async () => {
    if (!scrapedData.title && !scrapedData.shortDescription) {
      setCmsMessage("Please scrape some data first before sending to CMS");
      return;
    }

    setIsSendingToCMS(true);
    setCmsMessage("");

    try {
      const response = await fetch(`/api/collection/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fieldData: {
            name: scrapedData.title || "Scraped Content",
            "client-stories-summary": scrapedData.shortDescription || "No description available",
            "ready-to-publish": false,
            "opens": scrapedData.openingDate,
            "closes": scrapedData.closingDate,
            "deadline-text": scrapedData.duration,
            "funding-body": scrapedData.fundingBody,
            "award-value": scrapedData.awardValue,
            "client-stories-thumbnail-image": scrapedData.imageUrl,
            "client-stories-body": scrapedData.mainBody,
            "meta-title": scrapedData.title || "Scraped Content",
            "meta-description": (
              scrapedData.shortDescription || "No description available"
            )
              .replace(/\n/g, " ")
              .trim(),
            "url-5": scrapedData.url,
            order: scrapedData.order,
          },
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
      setCmsMessage(
        `✅ Successfully created item in CMS! Item ID: ${newItem.id}`
      );

      // Clear the form after successful creation
      setTimeout(() => {
        handleClearData();
        setCmsMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error creating item:", error);
      setCmsMessage(
        `❌ Failed to create item: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    } finally {
      setIsSendingToCMS(false);
    }
  };

  const handleClearData = () => {
    setScrapedData({
      title: "",
      shortDescription: "",
      summary: "",
      eligibility: "",
      scope: "",
      imageUrl: "",
      openingDate: "",
      closingDate: "",
      duration: "",
      mainBody: "",
      fundingBody: "",
      awardValue: "",
      url: "",
      order: 0,
    });
    setScrapeUrl("");
    setScrapeError("");
    setCmsMessage("");
  };

  const getCmsMessageClass = () => {
    if (cmsMessage.includes("✅")) return styles.success;
    if (cmsMessage.includes("❌")) return styles.error;
    return "";
  };

  return (
    <div className={styles.page}>
      <GlobalNavbar/>
      <main className={styles.main}>


        <div className={styles.scraperContainer}>
        <Link href="/" className={styles.backButton}>
          ← Back to Collections
        </Link>
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
                {isScraping ? "Scraping..." : "Scrape Data"}
              </button>
            </div>
            {scrapeError && <p className={styles.scrapeError}>{scrapeError}</p>}
          </div>

          {/* Scraped Data Display */}
          {(scrapedData.title ||
            scrapedData.shortDescription ||
            scrapedData.summary) && (
            <div className={styles.scrapedDataSection}>
              <div className={styles.sectionHeader}>
                <h2>Scraped Data</h2>
                <button
                  onClick={handleClearData}
                  className={styles.clearButton}
                >
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
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="Edit title..."
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Short Description:</label>
                  <textarea
                    value={scrapedData.shortDescription}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        shortDescription: e.target.value,
                      }))
                    }
                    className={styles.dataTextarea}
                    placeholder="Edit short description..."
                    rows={3}
                  />
                </div>



                {scrapedData.imageUrl && (
                  <div className={styles.dataField}>
                    <label>Image URL:</label>
                    <input
                      type="url"
                      value={scrapedData.imageUrl}
                      onChange={(e) =>
                        setScrapedData((prev) => ({
                          ...prev,
                          imageUrl: e.target.value,
                        }))
                      }
                      className={styles.dataInput}
                      placeholder="Edit image URL..."
                    />
                  </div>
                )}

                <div className={styles.dataField}>
                  <label>Opening Date (YYYY-MM-DD):</label>
                  <input
                    type="text"
                    value={scrapedData.openingDate}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        openingDate: e.target.value,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="YYYY-MM-DD"
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Closing Date (YYYY-MM-DD):</label>
                  <input
                    type="text"
                    value={scrapedData.closingDate}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        closingDate: e.target.value,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="YYYY-MM-DD"
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Duration:</label>
                  <input
                    type="text"
                    value={scrapedData.duration}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="Edit duration..."
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Funding Body:</label>
                  <input
                    type="text"
                    value={scrapedData.fundingBody}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        fundingBody: e.target.value,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="Enter funding body..."
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Award Value:</label>
                  <input
                    type="text"
                    value={scrapedData.awardValue}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        awardValue: e.target.value,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="Enter award value..."
                  />
                </div>


                <div className={styles.dataField}>
                  <label>Grants Body (Combined Content):</label>
                  <RichTextEditor
                    value={scrapedData.mainBody}
                    onChange={(value) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        mainBody: value,
                      }))
                    }
                    placeholder="Enter main body content..."
                  />
                </div>

                <div className={styles.dataField}>
                  <label>Order (for sorting):</label>
                  <input
                    type="number"
                    value={scrapedData.order}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        order: parseInt(e.target.value) || 0,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="Enter order number..."
                    min="0"
                    step="1"
                  />
                </div>

                <div className={styles.dataField}>
                  <label>URL:</label>
                  <input
                    type="url"
                    value={scrapedData.url}
                    onChange={(e) =>
                      setScrapedData((prev) => ({
                        ...prev,
                        url: e.target.value,
                      }))
                    }
                    className={styles.dataInput}
                    placeholder="Enter URL..."
                  />
                </div>


              </div>

              {/* Send to CMS Button */}
                <button
                  onClick={handleSendToCMS}
                  className={styles.sendToCMSButton}
                  disabled={isSendingToCMS}
                >
                  {isSendingToCMS ? "Creating Item..." : "Send Data to CMS"}
                </button>
                {cmsMessage && (
                  <p className={`${styles.cmsMessage} ${getCmsMessageClass()}`}>
                    {cmsMessage}
                  </p>
                )}
            </div>
          )}
          {/* Debug Collection Fields */}
          {collectionFields && (
            <div className={styles.debugSection}>
              <h3>Available Collection Fields:</h3>
              <div className={styles.fieldsList}>
                {collectionFields.map((field: any, index: number) => (
                  <div key={index} className={styles.fieldItem}>
                    <strong>{field.displayName}</strong> ({field.slug}) -{" "}
                    {field.type}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <FooterComponent/>
    </div>
  );
}
