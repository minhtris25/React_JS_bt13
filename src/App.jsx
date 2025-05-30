// src/App.jsx
import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

function App() {
  const [searchImages, setSearchImages] = useState({
    term: 'car', // Từ khóa tìm kiếm ban đầu
    images: [], // Danh sách hình ảnh
  });
  const [loading, setLoading] = useState(false);

  const UNSPLASH_ACCESS_KEY = 'LSZnm2oP0Je58h_98twAXy7StIPi3poj5-yDWgP10As'; // Thay bằng khóa API của bạn

  const fetchImages = async (term) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${term}&per_page=12`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
          },
        }
      );
      const data = await response.json();
      setSearchImages((prev) => ({
        ...prev,
        images: data.results,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
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