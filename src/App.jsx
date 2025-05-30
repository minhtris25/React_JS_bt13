// src/App.jsx
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import unsplash from './Api'; // Import từ file Api.jsx

function App() {
  const [searchImages, setSearchImages] = useState({
    term: 'car', // Từ khóa tìm kiếm ban đầu
    images: [], // Danh sách hình ảnh
  });
  const [loading, setLoading] = useState(false); // Thêm state loading

  const fetchImages = async (term) => {
    setLoading(true);
    try {
      const response = await unsplash.get('/search/photos', {
        params: {
          query: term,
          per_page: 12,
        },
      });
      if (response.data.results) {
        setSearchImages((prev) => ({
          ...prev,
          images: response.data.results,
        }));
      } else {
        console.error('No results found');
        setSearchImages((prev) => ({
          ...prev,
          images: [],
        }));
      }
    } catch (error) {
      console.error('Error fetching images:', error);
      setSearchImages((prev) => ({
        ...prev,
        images: [],
      }));
    } finally {
      setLoading(false);
    }
  };

  // Gọi API lần đầu khi ứng dụng khởi động
  useEffect(() => {
    fetchImages(searchImages.term);
  }, []);

  // Hàm để cập nhật term và gọi API
  const handleSearchSubmit = (newTerm) => {
    setSearchImages((prev) => ({
      ...prev,
      term: newTerm,
    }));
    fetchImages(newTerm);
  };

  return (
    <div className="container mt-5">
      <SearchBar term={searchImages.term} onSearchSubmit={handleSearchSubmit} />
      {loading ? (
        <progress className="progress is-primary" max="100">
          Loading...
        </progress>
      ) : (
        <ImageList images={searchImages.images} />
      )}
    </div>
  );
}

export default App;