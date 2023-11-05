import './CarouselComponent.css';
import SwipeableTextMobileStepper from './CarouselSwipe';

function CarouselComponent() {

  return (
      <div className="CarouselComponent">
        <div className="title">
            <span>Based on data and trends from Fannie Mae</span>
            <div class="Carousel">
              <SwipeableTextMobileStepper />
            </div>  
        </div>
      </div>
  );
}

export default CarouselComponent;