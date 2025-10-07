<div align="center">

# 📚 Book Data Manager - Complete CSV Management System

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&duration=3000&pause=1000&color=2196F3&center=true&vCenter=true&width=600&lines=Modern+Book+Management;CSV+Import+%26+Export;Inline+Editing;Advanced+Filtering)](https://git.io/typing-svg)

**React-Based Data Management** | **CSV Processing** | **Real-time Editing** | **Bulk Operations** 🚀

</div>

---

## ✨ Features

**📊 Data Management**
- CSV file import with drag & drop
- Generate 10,000 sample books instantly
- Inline cell editing with live updates
- Bulk data export to CSV
- Modification tracking system

**🔍 Advanced Filtering**
- Real-time search across all fields
- Genre-based filtering
- Multi-column sorting (ascending/descending)
- Smart pagination with 50 items per page
- Filter coverage statistics

**✏️ Editing Capabilities**
- Click-to-edit inline cells
- Keyboard shortcuts (Enter/Escape)
- Visual modification indicators
- Undo all changes functionality
- Modified record highlighting

**🎨 Modern UI/UX**
- Responsive Bootstrap design
- Interactive data tables
- Loading states and animations
- Data statistics dashboard
- Mobile-friendly interface

---

<div align="center">

## 🛠️ Tech Stack

<p>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
<img src="https://img.shields.io/badge/PapaParse-339933?style=for-the-badge&logo=csv&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

<p>
<img src="https://img.shields.io/badge/React_Hooks-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Bootstrap_Icons-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
</p>

</div>

---

## 📁 Project Structure

```
book-data-manager/
├── src/
│   ├── components/
│   │   ├── DataTable.js          # Main data table with editing
│   │   ├── EditableCell.js       # Inline editing component
│   │   ├── FileUpload.js         # CSV upload & generation
│   │   ├── Pagination.js         # Advanced pagination
│   │   ├── SearchAndFilter.js    # Search and filter controls
│   │   └── UIComponents.js       # Reusable UI elements
│   ├── hooks/
│   │   └── useDataManager.js     # Custom data management hooks
│   ├── services/
│   │   └── dataService.js        # Data processing service
│   ├── utils/
│   │   ├── csvUtils.js           # CSV parsing utilities
│   │   └── dataGenerator.js      # Fake data generator
│   ├── others/
│   │   └── constants.js          # Application constants
│   ├── App.js                    # Main application component
│   └── App.css                   # Global styles
└── public/
    └── index.html
```

---

## 🚀 Installation & Setup

### Prerequisites
```bash
Node.js (v14 or higher)
npm or yarn package manager
Modern web browser
```

### Installation Steps

**1. Clone the repository**
```bash
git clone <repository-url>
cd book-data-manager
```

**2. Install Dependencies**
```bash
npm install
```

**3. Required Dependencies**
```bash
npm install react react-dom
npm install papaparse
npm install bootstrap bootstrap-icons
```

**4. Start Development Server**
```bash
npm start
```
Application opens on `http://localhost:3000`

**5. Build for Production**
```bash
npm run build
```

---

## 📊 Features Breakdown

### 📁 File Management
| Feature | Description | Status |
|---------|-------------|--------|
| **CSV Upload** | Drag & drop or click to upload | ✅ |
| **File Validation** | Automatic CSV format checking | ✅ |
| **Data Generation** | Generate 10,000 sample books | ✅ |
| **CSV Export** | Download edited data as CSV | ✅ |

### ✏️ Editing Features
| Feature | Description | Keyboard Shortcut |
|---------|-------------|-------------------|
| **Inline Edit** | Click any cell to edit | Click |
| **Save Changes** | Save edited value | Enter |
| **Cancel Edit** | Discard changes | Escape |
| **Visual Feedback** | Yellow highlight for modified rows | - |

### 🔍 Search & Filter
| Feature | Description | Real-time |
|---------|-------------|-----------|
| **Global Search** | Search across title, author, ISBN | ✅ |
| **Genre Filter** | Filter by book genre | ✅ |
| **Multi-sort** | Sort by any column | ✅ |
| **Smart Pagination** | Navigate through large datasets | ✅ |

---

## 🎯 Data Model

### Book Object Structure
```javascript
{
  id: Number,                    // Unique identifier
  Title: String,                 // Book title
  Author: String,                // Author name
  Genre: String,                 // Book genre
  PublishedYear: Number,         // Publication year
  ISBN: String,                  // ISBN number
  modified: Boolean              // Modification flag
}
```

### Required CSV Format
```csv
Title,Author,Genre,PublishedYear,ISBN
"The Great Gatsby","F. Scott Fitzgerald","Fiction",1925,"978-0-7432-7356-5"
"To Kill a Mockingbird","Harper Lee","Fiction",1960,"978-0-06-112008-4"
```

---

<div align="center">

## 🎨 UI Components

<table>
<tr>
<td align="center">📤</td>
<td><strong>File Upload</strong><br/>Drag & drop CSV or generate sample data</td>
</tr>
<tr>
<td align="center">📊</td>
<td><strong>Data Stats</strong><br/>Total records, filtered results, modifications</td>
</tr>
<tr>
<td align="center">🔍</td>
<td><strong>Search & Filter</strong><br/>Real-time filtering and sorting controls</td>
</tr>
<tr>
<td align="center">📋</td>
<td><strong>Data Table</strong><br/>Interactive table with inline editing</td>
</tr>
<tr>
<td align="center">📄</td>
<td><strong>Pagination</strong><br/>Navigate through pages with jump-to feature</td>
</tr>
<tr>
<td align="center">⚡</td>
<td><strong>Action Buttons</strong><br/>Download CSV and reset modifications</td>
</tr>
</table>

</div>

---

## 🔧 Custom Hooks

### useDataManager
Manages application state and data operations:
- File upload handling
- Data editing and bulk updates
- CSV download functionality
- Reset modifications
- Error handling

### useFiltersAndSorting
Handles filtering and sorting logic:
- Search term filtering
- Genre-based filtering
- Multi-column sorting
- Pagination state
- Filter management

### useKeyboardShortcuts
Keyboard shortcuts for power users:
- `Ctrl/Cmd + S` - Download CSV
- `Ctrl/Cmd + R` - Reset modifications
- `Escape` - Clear search

---

## 🎯 Key Features Explained

### 📊 Data Statistics Dashboard
Real-time statistics display:
- **Total Records**: All loaded books
- **Filtered Results**: Books matching current filters
- **Modified Records**: Number of edited entries
- **Currently Showing**: Visible records on current page
- **Filter Coverage**: Visual progress bar

### ✏️ Inline Editing
Click-to-edit functionality:
1. Click any cell to enter edit mode
2. Modify the value
3. Press Enter to save or Escape to cancel
4. Modified rows highlighted in yellow
5. Changes tracked for easy reset

### 🔍 Advanced Filtering
Multi-level filtering system:
- Search across Title, Author, and ISBN
- Filter by Genre dropdown
- Sort by Title, Author, Genre, or Year
- Toggle ascending/descending order
- Clear all filters with one click

### 📄 Smart Pagination
Efficient data navigation:
- 50 items per page
- First/Previous/Next/Last buttons
- Page number buttons with ellipsis
- Jump-to-page dropdown (for 10+ pages)
- Current page indicator

---

## 📱 Responsive Design

**Desktop (≥1200px)**
- Full-width layout with all controls
- 6-column data table
- Expanded filter panel

**Tablet (768px - 1199px)**
- Responsive grid layout
- Collapsible filter section
- Touch-friendly buttons

**Mobile (<768px)**
- Stacked layout
- Horizontal scrolling table
- Simplified navigation

---

## 🌟 Sample Data Generator

Generate realistic test data instantly:

**Included Genres:**
- Fiction, Non-Fiction
- Science Fiction, Fantasy
- Mystery, Romance
- Thriller, Biography
- History, Self-Help

**Sample Authors:**
- Classic: Jane Austen, Mark Twain, Charles Dickens
- Modern: Stephen King, J.K. Rowling, Agatha Christie
- Contemporary: Toni Morrison, Maya Angelou

**Auto-generated Fields:**
- Dynamic book titles
- Random publication years (1800-2024)
- Valid ISBN-13 format
- Unique IDs

---

## 🔒 Data Handling

### CSV Parsing
```javascript
// Uses PapaParse for robust CSV processing
- Dynamic typing
- Skip empty lines
- Header detection
- Error handling
```

### Data Validation
```javascript
// Validates CSV structure
- Required fields check
- Data type validation
- Sanitization and trimming
- Error feedback
```

### Export Functionality
```javascript
// Clean CSV export
- Removes internal fields (id, modified)
- Preserves data integrity
- UTF-8 encoding
- Automatic download
```

---

## 🎨 Styling & Theming

**Bootstrap 5 Integration**
- Responsive grid system
- Card-based layouts
- Modern button styles
- Form controls

**Bootstrap Icons**
- Comprehensive icon set
- Semantic icon usage
- Visual hierarchy

**Custom Styling**
- Gradient backgrounds
- Hover effects
- Smooth transitions
- Loading animations

---

## 🔄 Application Flow

**📤 Upload/Generate Data**
1. Drag & drop CSV or click to browse
2. OR generate 10,000 sample books
3. Data validation and processing
4. Display in data table

**✏️ Edit Records**
1. Click any cell to edit
2. Modify value
3. Save with Enter or buttons
4. Visual modification indicator

**🔍 Filter & Search**
1. Enter search term
2. Select genre filter
3. Choose sort column and order
4. Navigate through pages

**💾 Export Changes**
1. Review modifications
2. Click Download CSV
3. Save file locally
4. OR reset all changes

---

## 📊 Performance Optimization

**Efficient Rendering**
- React hooks for state management
- useMemo for expensive computations
- useCallback for event handlers
- Lazy loading for large datasets

**Pagination Strategy**
- Display 50 items per page
- Virtual scrolling ready
- Efficient data slicing
- Smart page calculation

**Memory Management**
- Deep cloning for original data
- Modification tracking
- Cleanup on reset
- Optimized re-renders

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

---

<div align="center">

## 🔍 Testing the Application

**Quick Start:**
1. Visit the application
2. Click "Generate 10,000 Sample Books"
3. Wait for data to load
4. Try editing a cell
5. Use search and filters
6. Navigate through pages
7. Download your changes

**CSV Upload Test:**
1. Prepare CSV with required columns
2. Drag file to upload area
3. Verify data appears correctly
4. Test editing functionality
5. Export modified data

---

## ⚠️ Important Notes

- **CSV Format**: Ensure exact column headers (Title, Author, Genre, PublishedYear, ISBN)
- **Browser Support**: Works best in modern browsers (Chrome, Firefox, Safari, Edge)
- **Data Persistence**: Changes are not automatically saved - download your edits!
- **File Size**: Can handle large CSV files (tested up to 10,000 rows)
- **Modifications**: Yellow highlight indicates edited records

---

## 🎯 Future Enhancements

- [ ] Backend integration for data persistence
- [ ] User authentication system
- [ ] Multiple CSV file support
- [ ] Advanced export options (Excel, JSON)
- [ ] Bulk edit operations
- [ ] Data validation rules
- [ ] Custom column configuration
- [ ] Dark mode theme
- [ ] Mobile app version
- [ ] Cloud storage integration

---


**⭐ If you find this book manager helpful, please give it a star! ⭐**

**Made with ❤️ and React**

</div>
