import DataIngestion from "../assets/DataIngestionIMG.png"

const BatchDataEngineering = () => {
  return (
    <div className="bg-black text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Batch Data Engineering: A Complete Guide
        </h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img src={DataIngestion} alt="Batch Processing" className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">What is Batch Data Engineering?</h2>
          <p className="text-gray-700">
            Batch Data Engineering involves processing large datasets at scheduled intervals.
            It is ideal for historical data analysis, ETL operations, machine learning, and reporting.
          </p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Characteristics</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Scheduled execution (hourly, daily, weekly)</li>
            <li>Efficient resource utilization</li>
            <li>Scalable for massive datasets</li>
            <li>Ensures data consistency</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
              <img src={DataIngestion} alt="Data Ingestion" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">1. Data Ingestion</h3>
              <p className="text-gray-600">Collecting data from databases, APIs, and files.</p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-gray-50">
              <img src={DataIngestion}  alt="Data Storage" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">2. Data Storage</h3>
              <p className="text-gray-600">Data is stored in lakes, warehouses, and databases.</p>
            </div>
            <div className="p-4 border-l-4 border-yellow-500 bg-gray-50">
              <img src={DataIngestion}   alt="Data Processing" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">3. Data Processing</h3>
              <p className="text-gray-600">ETL operations transform raw data for analysis.</p>
            </div>
            <div className="p-4 border-l-4 border-red-500 bg-gray-50">
              <img src={DataIngestion}   alt="Data Analysis" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">4. Data Analysis</h3>
              <p className="text-gray-600">Processed data is used for reporting and machine learning.</p>
            </div>
          </div>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Advantages</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Handles large data volumes efficiently</li>
            <li>Optimizes costs by reducing real-time processing</li>
            <li>Ensures accurate and reliable data</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>ETL pipelines</li>
            <li>Data warehousing</li>
            <li>Machine learning model training</li>
            <li>Business intelligence & reporting</li>
          </ul>
        </section>
        
        <footer className="text-center text-gray-600 mt-6">
          <p>Want to implement Batch Processing? Use frameworks like Apache Spark, Hadoop, and Google Dataflow!</p>
        </footer>
      </div>
    </div>
  );
};

export default BatchDataEngineering;
