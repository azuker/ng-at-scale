import { sandboxOf } from 'angular-playground';
import { OverlayComponent } from './overlay.component';

export default sandboxOf(OverlayComponent)
  .add('simple overlay', {
    template: `
        <zuknglib-overlay overlayAnimationKind="leftToRight">
            <div class="card">
                <div class="container">
                    <span>Some other text, yeah!</span>
                </div>
            </div>
            <div class="overlayContent" overlay>
                <span>Some other overlay text, yeah!</span>
            </div>
        </zuknglib-overlay>
    `,
    styles: [
        `.card {
            position: relative;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
            transition: 0.3s;
            padding: 40px 20px 40px 20px;
        }

        .card:hover {
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        }

        .overlayContent {
            background-color: black;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            width: 100%;
        }

        .overlayContent span {
            color: white;
            font-size: 20px;
        }`,
    ]
  });
