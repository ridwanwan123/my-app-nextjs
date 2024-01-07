import { useState, useEffect } from 'react';

type UserData = {
  name: string;
  age: number;
};

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    // Lakukan fetching data dari API
    fetch('/api/hello') // Ganti dengan path sesuai dengan struktur folder proyekmu
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {userData ? (
        <h1>Hallo, {userData.name}, Umur kamu adalah {userData.age}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
