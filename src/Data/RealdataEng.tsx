

const RealTimeDataEngineering = () => {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
          Real-Time (Streaming) Data Engineering: A Complete Guide
        </h1>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <img src="/images/real_time_processing.jpg" alt="Real-Time Processing" className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">What is Real-Time Data Engineering?</h2>
          <p className="text-gray-700">
            Real-Time Data Engineering refers to the continuous processing of data as it is generated.
            It is essential for applications requiring real-time analytics, monitoring, fraud detection, and dynamic decision-making.
          </p>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Key Characteristics</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Continuous data ingestion and processing</li>
            <li>Low latency (milliseconds to seconds)</li>
            <li>Event-driven architecture</li>
            <li>Scalability to handle high-velocity data</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-blue-500 bg-gray-50">
              <img src="/images/event_streaming.jpg" alt="Event Streaming" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">1. Event Streaming</h3>
              <p className="text-gray-600">Data is continuously collected from sources like IoT devices, logs, and transactions.</p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-gray-50">
              <img src="/images/real_time_storage.jpg" alt="Real-Time Storage" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">2. Data Storage</h3>
              <p className="text-gray-600">Data is stored in in-memory databases and distributed systems.</p>
            </div>
            <div className="p-4 border-l-4 border-yellow-500 bg-gray-50">
              <img src="/images/stream_processing.jpg" alt="Stream Processing" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">3. Stream Processing</h3>
              <p className="text-gray-600">Data is processed in real-time using frameworks like Apache Kafka and Flink.</p>
            </div>
            <div className="p-4 border-l-4 border-red-500 bg-gray-50">
              <img src="/images/real_time_analysis.jpg" alt="Real-Time Analysis" className="w-full h-32 object-cover rounded mb-2" />
              <h3 className="text-lg font-medium">4. Real-Time Analytics</h3>
              <p className="text-gray-600">Insights are generated instantly for monitoring and decision-making.</p>
            </div>
          </div>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Advantages</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Immediate data insights</li>
            <li>Detects anomalies and fraud in real-time</li>
            <li>Enhances user experience with instant recommendations</li>
          </ul>
        </section>
        
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Use Cases</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Fraud detection systems</li>
            <li>Stock market price tracking</li>
            <li>IoT sensor data processing</li>
            <li>Social media trend analysis</li>
          </ul>
        </section>
        
        <footer className="text-center text-gray-600 mt-6">
          <p>Want to implement Real-Time Processing? Use technologies like Apache Kafka, Spark Streaming, and Flink!</p>
        </footer>
      </div>
    </div>
  );
};

export default RealTimeDataEngineering;