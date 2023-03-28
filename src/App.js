
//  import './App.css';

// // import {spreadsheetComponent} from 
// import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
// import  {Sheet} from  './components/sheet'
// function App() {

//    <button >Toggle Theme</button>

//   return (
//     <div className="App">
      
//      <SpreadsheetComponent  
//           // maxHeight={500} 
//           width={1900}
//          height={1000}
//      rowCount={940}
//      marginTop={400} >
//      </SpreadsheetComponent>
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
import { Sheet } from './components/sheet';
import './App.css';

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VFhhQlJBfVtdX2RWfFN0RnNYfVRxdF9CaEwgOX1dQl9gSX1RfkVjWHdcdn1QRWQ=');



// function App() {
//   const [themeMode, setThemeMode] = useState('light');

//   const toggleThemeMode = () => {
//     setThemeMode(themeMode === 'light' ? 'dark' : 'light');
//   };

//   useEffect(() => {
//     import(`./App-${themeMode}.css`).then();
//   }, [themeMode]);

//   useEffect(() => {
//     document.body.className = `theme-${themeMode}`;
//   }, [themeMode]);

//   return (
//     <div className="App">
//       <button  className ="btn" onClick={toggleThemeMode}>Toggle Theme</button>
//       <div className="spreadsheet-container">
//         <SpreadsheetComponent
//           className={`spreadsheet-${themeMode}`}
//           width={1900}
//           height={1100}
//           rowCount={940}
//           marginTop={400}>
//         </SpreadsheetComponent>
//       </div>
//     </div>
//   );
// }

// export default App;




function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const onBeforeRender = (args) => {
    if (args.target === 'toolbar') {
      const toggleButton = {
        type: 'Button',
        text: `Toggle Theme (${themeMode})`,
        tooltipText: 'Toggle Theme',
        cssClass: 'e-icons e-toggle-theme',
        click: () => toggleThemeMode(),
      };
      args.items.push(toggleButton);
    }
  };

  useEffect(() => {
    import(`./App-${themeMode}.css`).then();
  }, [themeMode]);

  useEffect(() => {
    document.body.className = `theme-${themeMode}`;
  }, [themeMode]);

  return (
    <div className="App">
      <div className="spreadsheet-container">
        <SpreadsheetComponent
          className={`spreadsheet-${themeMode}`}
          width={1900}
          height={1050}
          rowCount={940}
          marginTop={400}
          beforeRender={onBeforeRender}>
          <SheetsDirective>
            {/* <SheetDirective>
              <RangesDirective>
                <RowsDirective>
                  <RowDirective>
                    <CellsDirective>
                      <CellDirective value="Hello World" />
                    </CellsDirective>
                  </RowDirective>
                </RowsDirective>
              </RangesDirective>
            </SheetDirective> */}
          </SheetsDirective>
        </SpreadsheetComponent>
      </div>
    </div>
  );
}

export default App;
