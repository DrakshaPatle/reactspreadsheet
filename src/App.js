

import React, { useState, useEffect, useRef } from 'react';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
import { Sheet } from './components/sheet';
import './App.css';

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('ORg4AjUWIQA/Gnt2VFhhQlJBfVtdX2RWfFN0RnNYfVRxdF9CaEwgOX1dQl9gSX1RfkVjWHdcdn1QRWQ=');


function App() {
  const [themeMode, setThemeMode] = useState('light');

  const toggleThemeMode = () => {
    

    
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };




  useEffect(() => {
    import(`./App-${themeMode}.css`).then();
  }, [themeMode]);

  useEffect(() => {
    document.body.className = `theme-${themeMode}`;
  }, [themeMode]);
  const ssref = useRef(null);

  

  return (
    <div className="App">


      <div className="spreadsheet-container">
        <SpreadsheetComponent
        
          className={`spreadsheet-${themeMode}`}
          // cssClass='spreadsheet-dark'
          width={1530}
          height={830}
          rowCount={700}
          marginTop={400}
          
          // beforeRender={onBeforeRender}
          >

                <button onClick={(toggleThemeMode)} className="e-btn" >Toggle</button>

          <SheetsDirective
          > 
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