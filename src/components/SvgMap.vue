<template>
  <div class="main-map__holder">
    <icon-select :activeIconName="activeIconName" @iconClicked="setActiveIcon"/>
    <!-- We'll reference this <svg> via 'mapSvg' -->
    <svg
      ref="mapSvg"
      class="main-map__svg"
      viewBox="0 0 889 1200"
      @click="addIconClickHandler"
    >
      <!-- The existing island path -->
      <path
        d="M438 1198L465 1190C504 1191 498.5 1196 505 1205C510.2 1212.2 516.833 1209.33 519.5 1207C524 1203.67 535.6 1195.2 546 1188C559 1179 551.5 1180 555 1163C558.478 1146.11 565.905 1149.95 580.224 1157.36L580.5 1157.5C595 1165 621.5 1153.5 630 1145.5C638.5 1137.5 646.5 1138.5 649 1137.5C653.5 1122 665 1126.5 678 1117C688.4 1109.4 701.333 1111.5 706.5 1113.5C711.667 1115.17 722.9 1116.4 726.5 1108C730.1 1099.6 743.333 1100.5 749.5 1102C756 1103.17 770.6 1102.8 777 1092C783.4 1081.2 784.333 1068.83 784 1064C781.833 1062 780.3 1056.2 791.5 1049C805.5 1040 799.5 1026.5 798 1019.5C779 991.5 778.5 988.5 774.5 978.5C787.3 950.9 771.833 933.667 762.5 928.5C758.167 925.167 750.7 916 755.5 906C760.3 896 759.833 887.167 759 884C757.5 870.5 745 866 749.5 852.5C763.5 833 755.5 844 759 817C762.5 790 769 804.5 786 793C803 781.5 813.5 769 813.5 756.5C830.7 741.3 829.667 722.5 827 715C819.667 704.333 812.7 683.1 843.5 683.5C874.3 683.9 882.667 658.667 883 646C877.333 641.333 869.4 619.6 883 570C896.6 520.4 877.333 497.333 866 492C856.167 488 835.9 471.1 833.5 435.5C830.5 391 858 422.5 859.5 394C860.7 371.2 842.667 359.833 833.5 357C812.833 352.167 774.9 332 788.5 290C802.1 248 767.167 225.5 748 219.5C740.167 219.667 719 212.1 697 180.5C669.5 141 644.5 127.5 633 116.5C621.5 105.5 614.5 102.5 604.5 103.5C594.5 104.5 595 105 581 90.5C567 76 551 87.5 538.5 95C526 102.5 524.5 98 516 89.5C507.5 81 506 84.5 499 80.5C493.4 77.3 492 70.5 492 67.5L494 51.5C494.5 48.5 493.2 40.3 484 31.5C474.8 22.7 458.167 25.5 451 28C450.333 30.3333 446.6 33.3 437 26.5C425 18 406 17.5 399.5 35C394.3 49 384.667 50.1667 380.5 49C374.333 48.5 361.5 52 359.5 70C357 92.5 341 83 331.5 83C322 83 317.5 87.5 310.5 106C304.9 120.8 294.167 113.167 289.5 107.5C281.667 97.5 260 77.7 236 78.5C206 79.5 219.5 80.5 206 61C192.5 41.5 170.5 52.5 161 59.5C141 62.3 138.667 56 140 52.5C140.167 51.3333 141.2 43.6 144 22C146.8 0.399979 125.167 -0.666652 114 1.50004C103.333 6.50002 80.2 16.3 73 15.5C65.8 14.7 53.6667 19.5 48.5 22C45 25.3333 37 32.3 33 33.5C28.5 32.5 11 45.5 13 59.5C15 73.5 12.5 69 10 75.5C4 80.3 1.5 87.8333 1 91C0.16667 94.5 2 106.4 16 126C30 145.6 21.8333 156.5 16 159.5C10.8333 164.333 0.699979 176.7 1.49998 187.5C12.3 200.3 11 209.833 8.99996 213C6.49996 220.333 4.19996 236.5 15 242.5C25.8 248.5 27.5 261.333 27 267C28.5 271.833 36 282 54 284C72 286 81.5 273.5 84 267C97.2 251.8 102.5 262.667 103.5 270C109.5 295.333 124.1 346.8 134.5 350C164.5 357 157.5 366.5 148 377C140.4 385.4 141.167 393.5 142.5 396.5C143 400.333 148.6 410.2 167 419C190 430 185 444 181.5 451.5C178 459 176.5 467.5 185 478C204.5 488.5 191.5 530.5 181.5 549C171.5 567.5 170 593.5 187 613.5C200.6 629.5 197.333 643.833 194 649C191.167 652.667 186.7 662.5 191.5 672.5C197.5 685 230 697 244 696.5C255.2 696.1 262.667 705.333 265 710C267.667 717 278.1 729.7 298.5 724.5C324 718 326 753.5 329.5 763.5C332.3 771.5 340.333 771.833 344 771C350.167 769.333 368.4 764.6 392 759C430.8 758.2 419.833 785.667 409.5 799.5C403.333 806.667 390.9 824.2 390.5 837C390 853 406.5 869.5 420.5 869.5C437.3 881.5 428.5 893.833 422 898.5C415.333 901.167 405 909.9 417 923.5C431.853 940.333 427.096 950.793 422.147 961.676L422 962C417 973 408.5 1025.5 406.5 1038C404.9 1048 414.167 1061.83 419 1067.5C418.667 1072.17 417.3 1082.3 414.5 1085.5C411.7 1088.7 421.667 1108.83 427 1118.5C429 1125.67 430.6 1140.6 421 1143C411.4 1145.4 407.333 1151.67 406.5 1154.5C407.333 1161.5 409.5 1177.6 411.5 1186C413.5 1194.4 430 1197.5 438 1198Z"
        fill="#CAA063"
        stroke="black"
      />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'
import { ZoomBehavior } from 'd3-zoom'
import { getIcon, IconKeys } from '../utils/svg-loader/svg-loader'
import IconSelect from './icon-select/icon-select.vue'

const mapSvg = ref<SVGSVGElement | null>(null)
let currentTransform = d3.zoomIdentity

// We'll store our <g> selection globally so we can use it in placeIcon()
let g: d3.Selection<SVGGElement, unknown, null, undefined> | null = null

onMounted(() => {
  // 2) Use typed generics when selecting your <svg>
  //    This ensures TS knows we're selecting an SVG element, not a generic Node.
  const svgSelection = d3.select<SVGSVGElement, unknown>(mapSvg.value!)

  // 3) Append a <g> to the SVG. Type it as a d3.Selection<SVGGElement>
  g = svgSelection.append<SVGGElement>('g')
  if (!g) return;

  // 4) Move existing island path into this <g> safely
  const paths = svgSelection.selectAll<SVGPathElement, unknown>('path');
  paths.each((d, i, group) => {
    const pathNode = group[i];   // an SVGPathElement
    if (!g) return;
    const gNode = g.node();
    if (pathNode && gNode) {
      gNode.appendChild(pathNode);
    }
  });

  // 5) Create a typed ZoomBehavior for an SVG element
  const zoom: ZoomBehavior<SVGSVGElement, unknown> = d3.zoom<SVGSVGElement, unknown>()
    .scaleExtent([0.5, 8])
    .on('zoom', (event) => {
      // g might be null, so check or use optional chaining
      currentTransform = event.transform;
      if (g) {
        g.attr('transform', event.transform)
      }
    })

  // 6) Now call(zoom) will be valid because types match
  svgSelection.call(zoom);
})

async function placeIcon(iconName: IconKeys, x: number, y: number) {
  if (!g) return
  const svgContent = await getIcon(iconName)
  const c = g.append('g').html(svgContent)
  const svg = c.select('svg').node() as SVGSVGElement
  if (!svg) return
  const w = svg.viewBox.baseVal.width || svg.width.baseVal.value || 0
  const h = svg.viewBox.baseVal.height || svg.height.baseVal.value || 0
  const s = 64 / Math.max(w, h)
  svg.setAttribute('width', (w * s).toString())
  svg.setAttribute('height', (h * s).toString())
  c.attr('transform', 'translate(' + (x - (w * s) / 2) + ',' + (y - (h * s) / 2) + ')')
}

const activeIconName = ref<IconKeys>('castle-a');
function setActiveIcon(iconName: IconKeys) {
  activeIconName.value = iconName;
}

function addIconClickHandler(e: MouseEvent) {
  if (!mapSvg.value) return
  const [sx, sy] = d3.pointer(e, mapSvg.value)
  const [mx, my] = currentTransform.invert([sx, sy])
  placeIcon(activeIconName.value, mx, my)
}
</script>

<style scoped>
.main-map__holder {
  width: 100vw;
  height: 100vh;
  background: #013A63;
  display: flex;
  place-content: center;
  box-sizing: border-box;
}
.main-map__svg {
  width: 100vw;
  height: 100vh;
}
</style>
