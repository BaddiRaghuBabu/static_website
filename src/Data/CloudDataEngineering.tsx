

const CloudDataEngineering = () => {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Cloud Data Engineering: A Complete Guide
        </h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img src="/images/cloud_computing.jpg" alt="Cloud Computing" className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">What is Cloud Data Engineering?</h2>
          <p className="text-gray-700">
            Cloud Data Engineering focuses on designing, building, and managing scalable data pipelines in cloud environments.
            It enables organizations to store, process, and analyze data efficiently using cloud-based solutions.
          </p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Characteristics</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Scalability to handle large data volumes</li>
            <li>Cost-effectiveness with pay-as-you-go models</li>
            <li>High availability and reliability</li>
            <li>Seamless integration with AI and analytics</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
              <img src="/images/cloud_storage.jpg" alt="Cloud Storage" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">1. Cloud Storage</h3>
              <p className="text-gray-600">Data is stored in cloud databases, lakes, and warehouses.</p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-gray-50">
              <img src="/images/cloud_etl.jpg" alt="Cloud ETL" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">2. Cloud ETL</h3>
              <p className="text-gray-600">Data is extracted, transformed, and loaded using cloud ETL tools.</p>
            </div>
            <div className="p-4 border-l-4 border-yellow-500 bg-gray-50">
              <img src="/images/cloud_processing.jpg" alt="Cloud Processing" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">3. Cloud Processing</h3>
              <p className="text-gray-600">Data is processed using serverless computing and big data frameworks.</p>
            </div>
            <div className="p-4 border-l-4 border-red-500 bg-gray-50">
              <img src="/images/cloud_ai.jpg" alt="Cloud AI" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">4. AI & Analytics</h3>
              <p className="text-gray-600">AI models and BI tools analyze data for insights.</p>
            </div>
          </div>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Advantages</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Eliminates infrastructure management</li>
            <li>Provides advanced security and compliance</li>
            <li>Enables real-time data access and collaboration</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Big Data Analytics</li>
            <li>Machine Learning Operations (MLOps)</li>
            <li>Data Warehousing</li>
            <li>Cloud-Based Business Intelligence</li>
          </ul>
        </section>
        
        <footer className="text-center text-gray-600 mt-6">
          <p>Want to implement Cloud Data Engineering? Use platforms like AWS, Google Cloud, and Azure!</p>
        </footer>
      </div>
    </div>
  );
};

export default CloudDataEngineering;
