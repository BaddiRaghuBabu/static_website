import CloudDataEngineering from '@/Data/CloudDataEngineering'
import BatchDataEngineering from '@/Data/DataIngestion'
import RealTimeDataEngineering from '@/Data/RealdataEng'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

export const DiplayPages = () => {
  return (
    <div>
       <Router>
          <div className=""> 
            <Routes>
                <Route path="/BatchDataEngineering" element={<BatchDataEngineering />} />
                <Route path="/RealTimeDataEngineering" element={<RealTimeDataEngineering />} />
                <Route path="/CloudDataEngineering" element={<CloudDataEngineering />} />
            </Routes>
          </div>
      </Router>
    </div>
  )
}
