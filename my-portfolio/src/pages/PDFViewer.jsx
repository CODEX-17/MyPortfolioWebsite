import React from 'react'

const PDFViewer = () => {

        return (
          <div className="p-4">
            <h2 className="text-lg mb-4">PDF Preview</h2>
            <iframe
              src="./../assets/resume/resume.pdf"
              title="PDF Viewer"
              width="100%"
              height="600px"
              className="border"
            ></iframe>
          </div>
        )
}

export default PDFViewer
