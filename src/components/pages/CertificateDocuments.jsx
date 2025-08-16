import React, { useState } from 'react';

function CertificateDocuments() {
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Certificate of Incorporation', url: '/docs/incorporation.pdf' },
    { id: 2, name: 'Tax Compliance Certificate', url: '/docs/tax.pdf' },
    { id: 3, name: 'Shareholding Certificate', url: '/docs/shareholding.pdf' },
  ]);
  const [search, setSearch] = useState('');

  const filteredDocs = documents.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newDoc = { id: Date.now(), name: file.name, url: URL.createObjectURL(file) };
      setDocuments([...documents, newDoc]);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📄 Certificate Documents</h1>
      <p>Manage and view your important certificates in one place.</p>

      {/* Search */}
      <input
        type="text"
        placeholder="Search documents..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          maxWidth: '300px',
          marginBottom: '15px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />

      {/* Document List */}
      <ul>
        {filteredDocs.length > 0 ? (
          filteredDocs.map(doc => (
            <li key={doc.id} style={{ marginBottom: '10px' }}>
              {doc.name}{" "}
              <a
                href={doc.url}
                download
                style={{
                  marginLeft: '10px',
                  color: 'blue',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                Download
              </a>
            </li>
          ))
        ) : (
          <li>No documents found</li>
        )}
      </ul>

      {/* Upload */}
      <div style={{ marginTop: '20px' }}>
        <label
          style={{
            display: 'inline-block',
            padding: '8px 12px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Upload New Document
          <input
            type="file"
            onChange={handleUpload}
            style={{ display: 'none' }}
          />
        </label>
      </div>
    </div>
  );
}

export default CertificateDocuments;
