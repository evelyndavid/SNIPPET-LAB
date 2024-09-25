import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateFlashcards() {
  const [flashcards, setFlashcards] = useState([]);
  const [currentFlashcard, setCurrentFlashcard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [expandedFlashcard, setExpandedFlashcard] = useState(null);

  const addFlashcard = () => {
    const newFlashcard = { id: Date.now(), title: '', body: '', created: new Date() };
    setFlashcards([...flashcards, newFlashcard]);
    setCurrentFlashcard(newFlashcard);
    setIsEditing(true);
  };

  const updateFlashcard = (key, value) => {
    setCurrentFlashcard({ ...currentFlashcard, [key]: value });
  };

  const saveFlashcard = () => {
    setFlashcards(flashcards.map(f => f.id === currentFlashcard.id ? currentFlashcard : f));
    setIsEditing(false);
  };

  const deleteFlashcard = (id) => {
    setFlashcards(flashcards.filter(f => f.id !== id));
    if (currentFlashcard && currentFlashcard.id === id) {
      setCurrentFlashcard(null);
      setIsEditing(false);
    }
  };

  const toggleEdit = (flashcard) => {
    if (currentFlashcard && currentFlashcard.id === flashcard.id) {
      setIsEditing(!isEditing);
    } else {
      setCurrentFlashcard(flashcard);
      setIsEditing(true);
    }
  };

  const toggleExpand = (id) => {
    setExpandedFlashcard(expandedFlashcard === id ? null : id);
  };

  return (
    <div style={{
      backgroundColor: '#1f2833',
      color: 'white',
      overflow: 'hidden',
      padding: '20px',
      height: '100vh',
    }}>
      <div className="d-flex justify-content-center mb-4">
        <button
          style={{
            backgroundColor: '#fff',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1.2rem',
            transition: 'background-color 0.3s ease',
            color: '#000',
            borderRadius: '5px',
          }}
          onClick={addFlashcard}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#28f0ceba'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
        >
          Add New Flashcard
        </button>
      </div>
      <div className="row" style={{
        maxHeight: 'calc(100vh - 150px)',
        overflowY: 'auto',
        paddingRight: '15px',
      }}>
        {flashcards.map(flashcard => (
          <div key={flashcard.id} className="col-md-3 mb-4" style={{ flex: '0 0 25%', maxWidth: '25%' }}>
            <div
              style={{
                backgroundColor: expandedFlashcard === flashcard.id ? '#28f0ceba' : '#3f4e5a',
                color: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                cursor: 'pointer',
                padding: '20px',
                textAlign: 'center',
                transform: expandedFlashcard === flashcard.id ? 'scale(1.05)' : 'scale(1)',
                boxShadow: expandedFlashcard === flashcard.id ? '0 6px 10px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.2)'
              }}
              onClick={() => toggleExpand(flashcard.id)}
            >
              <div className="card-body">
                <h5 style={{
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  color: 'white',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                }}>
                  {flashcard.title || 'Untitled'}
                </h5>
                <p style={{ fontSize: '1rem', color: '#ccc' }}>
                  Created on: {flashcard.created.toLocaleString()}
                </p>

                {expandedFlashcard === flashcard.id && (
                  <p style={{ fontSize: '1rem', color: '#ccc' }}>{flashcard.body || 'No content yet.'}</p>
                )}

                <div className="d-flex justify-content-between">
                  <button
                    style={{
                      backgroundColor: '#007bff',
                      border: 'none',
                    }}
                    onClick={() => toggleEdit(flashcard)}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </button>
                  <button
                    style={{
                      backgroundColor: '#dc3545',
                      border: 'none',
                    }}
                    onClick={(e) => { e.stopPropagation(); deleteFlashcard(flashcard.id); }}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>

                {isEditing && currentFlashcard.id === flashcard.id && (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter title"
                      value={currentFlashcard.title}
                      onChange={(e) => updateFlashcard('title', e.target.value)}
                      style={{
                        backgroundColor: '#3f4e5a',
                        border: 'none',
                        color: 'white',
                        marginTop: '10px',
                      }}
                      className="form-control"
                    />
                    <textarea
                      placeholder="Enter your notes here"
                      value={currentFlashcard.body}
                      onChange={(e) => updateFlashcard('body', e.target.value)}
                      style={{
                        backgroundColor: '#3f4e5a',
                        border: 'none',
                        color: 'white',
                        marginTop: '10px',
                      }}
                      className="form-control mt-2"
                    />
                    <button
                      style={{
                        backgroundColor: '#28f0ceba',
                        border: 'none',
                        marginTop: '10px',
                      }}
                      onClick={saveFlashcard}
                      className="btn btn-success btn-sm mt-2"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateFlashcards;
