import React, { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  /**
   * @param {{ id: number; name: string; image: string; balance: number; }} friend
   */
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} handleSelection={handleSelection} />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, handleSelection }) {
  return (
    <ul>
      {friends.map(
        (/** @type {{ id: React.Key | null | undefined; }} */ friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            handleSelection={handleSelection}
          />
        )
      )}
    </ul>
  );
}

function Friend({ friend, handleSelection }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          Your friend {friend.name} owes ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <Button
        onClick={() => {
          handleSelection(friend);
        }}
      >
        Select
      </Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  /**
   * @param {{ preventDefault: () => void; }} e
   */

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    };

    onAddFriend(newFriend);

    setName("");

    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🖐 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🚵‍♂️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={undefined}>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💵 Bill Value</label>
      <input type="text" />

      <label>💵 Your expense</label>
      <input type="text" />

      <label>💵 {selectedFriend.name}'s expense </label>
      <input type="text" disabled />

      <label htmlFor="">🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={undefined}>Split Bill</Button>
    </form>
  );
}

export default App;
