import './Shutter.scss';
import { useRef, useEffect } from 'react';

// https://stackoverflow.com/questions/59476859/iterating-through-htmlcollection-in-react-js

const Shutter = () => {
  const shutterRef = useRef(null);
  const
    shutterCluster = [document.getElementsByClassName("shutter")],
    shutterList = shutterCluster[0];

  const initShutter = () => {
    for (let i = 0; i < shutterList.length; i++) {
      let layer = shutterList[i];
      layer.style.display = "none";
      layer.classList.remove("a" + i);
      layer.classList.remove("b" + i);
    }
  }
  const siteLoadShutter = () => {
    for (let i = 0; i < shutterList.length; i++) {
      let layer = shutterList[i];
      layer.style.display = "";
      layer.style.borderColor = "black";
      layer.classList.add("b" + i);
      setTimeout(() => {
        initShutter();
      }, 666);
    }
  }

  const pageShutter = (e) => {
    for (let i = 0; i < shutterList.length; i++) {
      let layer = shutterList[i];
      layer.style.display = "";
      layer.style.borderColor = "transparent";
      layer.classList.add("a" + i);
    };
    setTimeout(() => {
      initShutter();
      //wire function to nav and set below attribute to shutter between pages
      // window.location.href = e.target.getAttribute("data-href");
      siteLoadShutter();
    }, 666);
  }


  useEffect(() => {
    initShutter();
    siteLoadShutter();
  })


  return (
    <div>
      <header className="Shutter-header">
        <h1>React Shutter Effect</h1>
      </header>
      <div className="buttonWrapper">
        <button onClick={(e) => pageShutter(e)}>
          Click to Shutter
        </button>
      </div>
      <main>
        <div ref={shutterRef} className="shutter">
          <div className="shutter">
            <div className="shutter">
              <div className="shutter">
                <div className="shutter">
                  <div className="shutter">
                    <div className="shutter">
                      <div className="shutter">
                        <div className="shutter">
                          <div className="shutter"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Shutter;
