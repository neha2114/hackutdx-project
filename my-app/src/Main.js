import './Main.css';
import SwipeableTextMobileStepper from './CarouselSwipe';

function Main() {

  return (
      <div className="Main">
        <div className="title">
            <span>Want a recommendation in less than 5 minutes? Use our calculator:</span>
            <div class="Carousel">
              <SwipeableTextMobileStepper />
            </div>  
        </div>
      </div>
  );
}

export default Main;