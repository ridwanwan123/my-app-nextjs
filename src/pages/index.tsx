import { useState, useEffect } from 'react';

type UserData = {
  username: string;
  // password: string;
  email: string;
};

export default function Home() {
  const [userData, setUserData] = useState<UserData[]>([]);

  useEffect(() => {
    // Lakukan fetching data dari API
    fetch(`https://fakestoreapi.com/users/1`)
      .then(response => response.json())
      .then(data => setUserData([data]))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <ul>
        {userData && userData.map((user: UserData) => (
          <li key={user.username}>
            <div>
              <strong>Username:</strong> {user.username}
            </div>
            <div>
              {/* <strong>Password:</strong> {user.password} */}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
