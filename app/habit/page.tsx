'use client'
import React, { useState } from 'react';

// Define a type for the habit
type Habit = {
  id: number;
  name: string;
};

const HabitTracker: React.FC = () => {
  // State to manage the list of habits
  const [habits, setHabits] = useState<Habit[]>([]);
  // State to manage the input for adding a new habit
  const [newHabit, setNewHabit] = useState<string>('');

  // Function to handle adding a new habit
  const addHabit = () => {
    if (newHabit.trim() === '') {
      // Prevent adding empty habits
      return;
    }

    // Create a new habit object
    const newHabitObject: Habit = {
      id: Date.now(),
      name: newHabit,
    };

    // Update the list of habits with the new habit
    setHabits([...habits, newHabitObject]);
    // Clear the input field
    setNewHabit('');
  };

  // Function to handle removing a habit
  const removeHabit = (habitToRemove: Habit) => {
    // Filter out the habit to remove from the list
    const updatedHabits = habits.filter((habit) => habit.id !== habitToRemove.id);
    // Update the list of habits
    setHabits(updatedHabits);
  };

  return (
    <div>
      <h2>Habit Tracker</h2>
      {/* Input for adding a new habit */}
      <div>
        <input
          type="text"
          placeholder="Enter a new habit"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>

      {/* List of habits */}
      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.name}
            <button onClick={() => removeHabit(habit)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
