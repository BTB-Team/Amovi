const BrushStroke = ({ className }) => {
  return (
    <div>
      <svg
        className={className}
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#FCA311" transform="rotate(-8 500 300)">
          {/* <!-- Main diagonal brush stroke --> */}
          <path
            d="
      M70 470
      C120 440 165 405 205 365
      C250 320 295 275 340 235
      C390 190 435 155 485 125
      C530 98 575 82 615 76
      C635 73 645 82 630 94
      C585 125 550 153 510 188
      C465 227 420 272 380 313
      C330 363 285 410 235 445
      C185 480 125 500 82 495
      Z
    "
          />

          {/* <!-- Thick parallel stroke --> */}
          <path
            opacity=".92"
            d="
      M145 520
      C190 480 235 435 275 395
      C325 345 370 300 420 255
      C470 210 515 170 560 135
      C595 108 630 90 665 84
      C680 82 687 92 675 102
      C635 132 605 160 565 197
      C520 239 480 280 435 325
      C385 375 340 420 295 457
      C245 497 190 530 155 535
      Z
    "
          />

          {/* <!-- Thin dry-brush line --> */}
          <path
            opacity=".75"
            d="
      M35 475
      C105 425 150 370 205 320
      C260 270 305 220 360 175
      C420 125 475 90 525 70
      C535 66 540 72 531 80
      C480 112 430 150 380 198
      C330 245 285 298 235 345
      C180 397 125 445 48 490
      Z
    "
          />

          {/* <!-- Another thin stroke --> */}
          <path
            opacity=".58"
            d="
      M215 535
      C270 490 315 445 360 395
      C410 340 455 290 505 245
      C550 205 600 165 650 130
      C675 113 695 103 715 98
      C722 96 725 101 719 107
      C680 137 640 170 600 207
      C550 252 505 300 460 350
      C410 405 365 455 310 495
      C270 524 240 540 215 545
      Z
    "
          />

          {/* <!-- Rough horizontal bristles --> */}
          <g fill="none" stroke="#FCA311" stroke-linecap="round">
            <path
              opacity=".65"
              stroke-width="7"
              d="M40 500 C120 440 190 360 260 300 C330 240 405 165 500 105"
            />

            <path
              opacity=".45"
              stroke-width="4"
              d="M75 515 C155 455 215 390 285 325 C360 255 440 175 535 115"
            />

            <path
              opacity=".55"
              stroke-width="5"
              d="M125 525 C195 475 255 415 325 350 C400 280 470 205 560 145"
            />

            <path
              opacity=".35"
              stroke-width="3"
              d="M165 545 C235 495 300 435 370 370 C440 305 510 230 600 165"
            />

            <path
              opacity=".5"
              stroke-width="4"
              d="M260 535 C320 490 380 430 440 370 C500 305 565 245 650 185"
            />
          </g>

          {/* <!-- Dry brush fragments --> */}
          <g fill="none" stroke="#FCA311" stroke-linecap="round">
            <path opacity=".35" stroke-width="3" d="M20 465 L125 370" />

            <path opacity=".45" stroke-width="2" d="M60 490 L175 385" />

            <path opacity=".3" stroke-width="4" d="M100 520 L205 420" />

            <path opacity=".4" stroke-width="3" d="M170 535 L275 435" />

            <path opacity=".32" stroke-width="2" d="M250 520 L355 420" />

            <path opacity=".4" stroke-width="3" d="M320 505 L425 405" />

            <path opacity=".3" stroke-width="2" d="M390 460 L500 355" />

            <path opacity=".4" stroke-width="3" d="M470 390 L575 290" />

            <path opacity=".3" stroke-width="2" d="M540 320 L650 220" />

            <path opacity=".4" stroke-width="3" d="M600 255 L705 165" />
          </g>

          {/* <!-- Paint splatters --> */}

          <circle cx="175" cy="395" r="10" />
          <circle cx="145" cy="420" r="5" />
          <circle cx="205" cy="365" r="4" />
          <circle cx="230" cy="350" r="7" />

          <circle cx="305" cy="290" r="6" />
          <circle cx="330" cy="270" r="3" />
          <circle cx="355" cy="245" r="8" />

          <circle cx="475" cy="160" r="6" />
          <circle cx="500" cy="140" r="3" />
          <circle cx="535" cy="120" r="5" />

          <circle cx="90" cy="470" r="4" />
          <circle cx="120" cy="450" r="3" />
          <circle cx="275" cy="330" r="4" />
          <circle cx="410" cy="210" r="3" />

          {/* <!-- Tiny splatter dots --> */}
          <g opacity=".75">
            <circle cx="110" cy="405" r="2" />
            <circle cx="130" cy="380" r="3" />
            <circle cx="155" cy="350" r="2" />
            <circle cx="250" cy="310" r="2" />
            <circle cx="285" cy="275" r="3" />
            <circle cx="390" cy="220" r="2" />
            <circle cx="425" cy="185" r="3" />
            <circle cx="455" cy="175" r="2" />
            <circle cx="520" cy="105" r="3" />
            <circle cx="570" cy="90" r="2" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default BrushStroke;
