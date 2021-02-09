import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import styles from "./Article.module.scss";
import { Avatar } from "../Avatar/Avatar";

const Like = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M11.1851 6.70678C11.4207 6.35092 11.5383 5.9592 11.5383 5.53133C11.5383 5.0361 11.3558 4.60595 10.9905 4.24022C10.6251 3.87486 10.1924 3.69222 9.69244 3.69222H8.4232C8.65391 3.21631 8.76946 2.75473 8.76946 2.30769C8.76946 1.74517 8.6851 1.2981 8.51699 0.966367C8.34869 0.634529 8.10346 0.390613 7.78133 0.234292C7.45911 0.0780469 7.09625 0 6.69243 0C6.44713 0 6.23087 0.088933 6.04338 0.266875C5.83669 0.468761 5.68765 0.728438 5.59634 1.04575C5.50498 1.36297 5.43163 1.6671 5.37639 1.95797C5.32115 2.24881 5.23573 2.45433 5.12041 2.57451C4.88477 2.82931 4.6276 3.13708 4.34875 3.49761C3.86319 4.12734 3.53383 4.49997 3.36084 4.6154H1.38496C1.13016 4.6154 0.912591 4.70567 0.7323 4.88581C0.552085 5.06613 0.461914 5.28367 0.461914 5.5385V10.1537C0.461914 10.4085 0.551984 10.626 0.7323 10.8063C0.912692 10.9866 1.13016 11.0768 1.38496 11.0768H3.46169C3.56747 11.0768 3.89914 11.173 4.45683 11.3653C5.04819 11.5721 5.56861 11.7295 6.01807 11.8377C6.46759 11.9459 6.92311 12 7.38468 12H8.05515H8.3149C8.99272 12 9.53834 11.8064 9.95184 11.4193C10.3652 11.0323 10.5696 10.5047 10.5648 9.83641C10.8533 9.4662 10.9975 9.03833 10.9975 8.55283C10.9975 8.44712 10.9904 8.34377 10.9759 8.24271C11.1585 7.92072 11.25 7.57456 11.25 7.20436C11.25 7.03127 11.2284 6.86532 11.1851 6.70678ZM2.17102 10.0168C2.07968 10.1081 1.97153 10.1539 1.84653 10.1539C1.7215 10.1539 1.61332 10.1081 1.52196 10.0168C1.43066 9.92552 1.38496 9.81731 1.38496 9.69221C1.38496 9.56723 1.43055 9.45911 1.52196 9.36772C1.61342 9.27637 1.7215 9.2307 1.84653 9.2307C1.97153 9.2307 2.07968 9.27637 2.17102 9.36772C2.26237 9.45908 2.30806 9.56721 2.30806 9.69221C2.30806 9.81731 2.26237 9.92552 2.17102 10.0168ZM10.4606 6.12299C10.3572 6.3441 10.2285 6.45708 10.0747 6.46183C10.1468 6.54359 10.2069 6.65788 10.255 6.80438C10.3031 6.95105 10.3269 7.08441 10.3269 7.20466C10.3269 7.53622 10.1997 7.82234 9.94489 8.06265C10.0315 8.21642 10.0747 8.38236 10.0747 8.56015C10.0747 8.73804 10.0327 8.91472 9.94855 9.09016C9.86452 9.26545 9.75025 9.39169 9.60608 9.46858C9.6301 9.61278 9.64202 9.74743 9.64202 9.8724C9.64202 10.6752 9.18046 11.0766 8.25731 11.0766H7.385C6.75507 11.0766 5.9331 10.9013 4.91862 10.5502C4.89455 10.5406 4.82494 10.5153 4.70948 10.4745C4.59403 10.4337 4.50873 10.4037 4.45342 10.3845C4.3981 10.3651 4.31405 10.3375 4.20099 10.3015C4.08796 10.2654 3.99673 10.2389 3.92697 10.2221C3.85731 10.2054 3.77792 10.1897 3.68906 10.1753C3.60016 10.1609 3.52441 10.1537 3.46192 10.1537H3.23116V5.53868H3.46192C3.53883 5.53868 3.62415 5.51698 3.71791 5.47381C3.81164 5.43052 3.90785 5.36564 4.00638 5.27908C4.10496 5.19252 4.19743 5.1072 4.28401 5.02301C4.37057 4.9389 4.46671 4.83315 4.57251 4.7058C4.67827 4.57835 4.76119 4.47623 4.82133 4.39929C4.88139 4.32238 4.95709 4.22378 5.04845 4.1036C5.13975 3.98345 5.19509 3.91131 5.21431 3.88724C5.47869 3.56038 5.66378 3.34164 5.76953 3.23101C5.96665 3.02435 6.10966 2.76114 6.19859 2.44143C6.28762 2.12166 6.36092 1.81998 6.41841 1.53639C6.47605 1.25277 6.56751 1.04838 6.69266 0.923378C7.15407 0.923378 7.46184 1.03631 7.61563 1.26229C7.7694 1.48822 7.84634 1.8368 7.84634 2.30794C7.84634 2.59156 7.73086 2.97735 7.50005 3.46528C7.26935 3.95326 7.15407 4.33668 7.15407 4.6155H9.69236C9.93299 4.6155 10.1468 4.708 10.3342 4.89319C10.5218 5.07825 10.6157 5.29335 10.6157 5.5386C10.6156 5.70684 10.5639 5.90158 10.4606 6.12299Z"
      fill="currentColor"
    />
  </svg>
);

const Dislike = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M0.814946 5.29322C0.579341 5.64908 0.46169 6.0408 0.461689 6.46867C0.461689 6.9639 0.644178 7.39405 1.00946 7.75978C1.37491 8.12514 1.80763 8.30778 2.30756 8.30778L3.5768 8.30778C3.34609 8.78368 3.23054 9.24527 3.23054 9.69231C3.23054 10.2548 3.3149 10.7019 3.48301 11.0336C3.65131 11.3655 3.89654 11.6094 4.21867 11.7657C4.54089 11.922 4.90375 12 5.30757 12C5.55287 12 5.76913 11.9111 5.95662 11.7331C6.16331 11.5312 6.31235 11.2716 6.40366 10.9542C6.49502 10.637 6.56837 10.3329 6.62361 10.042C6.67885 9.75119 6.76427 9.54566 6.8796 9.42549C7.11523 9.17069 7.3724 8.86292 7.65125 8.50239C8.13681 7.87266 8.46617 7.50003 8.63916 7.3846L10.615 7.3846C10.8698 7.3846 11.0874 7.29433 11.2677 7.11419C11.4479 6.93387 11.5381 6.71633 11.5381 6.4615L11.5381 1.8463C11.5381 1.59147 11.448 1.374 11.2677 1.19369C11.0873 1.01337 10.8698 0.923151 10.615 0.923151L8.53831 0.923151C8.43253 0.923151 8.10087 0.827019 7.54317 0.634705C6.95181 0.427945 6.43139 0.270537 5.98193 0.162332C5.53242 0.0541272 5.07689 -5.64856e-07 4.61533 -6.05207e-07L3.94485 -6.63821e-07L3.6851 -6.8653e-07C3.00728 -7.45787e-07 2.46166 0.193627 2.04816 0.580678C1.63482 0.967731 1.43041 1.49534 1.43515 2.16359C1.14671 2.5338 1.00251 2.96166 1.00251 3.44717C1.00251 3.55288 1.00961 3.65623 1.02411 3.75729C0.841492 4.07928 0.749958 4.42544 0.749958 4.79564C0.750033 4.96873 0.771629 5.13468 0.814946 5.29322ZM9.82899 1.98322C9.92032 1.89194 10.0285 1.84612 10.1535 1.84612C10.2785 1.84612 10.3867 1.89192 10.478 1.98322C10.5693 2.07448 10.615 2.18269 10.615 2.30779C10.615 2.43276 10.5694 2.54089 10.478 2.63228C10.3866 2.72363 10.2785 2.7693 10.1535 2.7693C10.0285 2.7693 9.92032 2.72363 9.82899 2.63228C9.73763 2.54092 9.69194 2.43279 9.69194 2.30779C9.69194 2.18269 9.73763 2.07448 9.82899 1.98322ZM1.53944 5.87701C1.64282 5.6559 1.77146 5.54292 1.92528 5.53817C1.8532 5.45641 1.79306 5.34212 1.74497 5.19562C1.69693 5.04895 1.67306 4.91559 1.67306 4.79534C1.67306 4.46378 1.80028 4.17765 2.05511 3.93735C1.96848 3.78358 1.92526 3.61764 1.92526 3.43985C1.92526 3.26196 1.96726 3.08528 2.05145 2.90983C2.13548 2.73454 2.24975 2.60831 2.39392 2.53142C2.3699 2.38722 2.35798 2.25257 2.35798 2.1276C2.35798 1.32478 2.81954 0.923352 3.74269 0.923353L4.615 0.923353C5.24493 0.923353 6.0669 1.09872 7.08138 1.44975C7.10545 1.45935 7.17506 1.48468 7.29052 1.52548C7.40597 1.56627 7.49127 1.59635 7.54658 1.61552C7.6019 1.63489 7.68595 1.66252 7.79901 1.69849C7.91204 1.73464 8.00327 1.76111 8.07303 1.77785C8.14269 1.79462 8.22208 1.81026 8.31094 1.82471C8.39984 1.83913 8.47559 1.8463 8.53808 1.8463L8.76884 1.8463L8.76884 6.46132L8.53808 6.46132C8.46117 6.46132 8.37585 6.48302 8.28209 6.52619C8.18836 6.56948 8.09215 6.63436 7.99362 6.72092C7.89504 6.80748 7.80257 6.8928 7.71599 6.97699C7.62943 7.0611 7.5333 7.16685 7.42749 7.2942C7.32173 7.42165 7.23881 7.52377 7.17867 7.60071C7.11861 7.67762 7.04291 7.77622 6.95156 7.8964C6.86025 8.01655 6.80491 8.08869 6.78569 8.11276C6.52131 8.43962 6.33622 8.65836 6.23047 8.76898C6.03335 8.97564 5.89034 9.23886 5.80141 9.55857C5.71238 9.87834 5.63908 10.18 5.58159 10.4636C5.52395 10.7472 5.43249 10.9516 5.30734 11.0766C4.84593 11.0766 4.53816 10.9637 4.38437 10.7377C4.2306 10.5118 4.15366 10.1632 4.15366 9.69206C4.15366 9.40844 4.26914 9.02265 4.49995 8.53472C4.73065 8.04674 4.84593 7.66332 4.84593 7.3845L2.30764 7.3845C2.06701 7.3845 1.85317 7.292 1.66576 7.10681C1.47819 6.92175 1.38431 6.70665 1.38431 6.4614C1.38439 6.29316 1.43609 6.09842 1.53944 5.87701Z"
      fill="currentColor"
    />
  </svg>
);

const Comment = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <g clip-path="url(#clip0)">
      <path
        d="M11.1964 2.99007C10.6607 2.33166 9.93304 1.81153 9.01343 1.42983C8.09382 1.04813 7.0893 0.8573 6 0.8573C4.91072 0.8573 3.90623 1.04813 2.9866 1.42983C2.06696 1.81153 1.33931 2.33156 0.803579 2.99007C0.267828 3.64854 0 4.36613 0 5.14292C0 5.81253 0.201944 6.43994 0.605997 7.02473C1.01005 7.60955 1.56243 8.10069 2.2634 8.49798C2.21423 8.6765 2.15621 8.8461 2.08922 9.00695C2.02226 9.16764 1.962 9.29936 1.90843 9.40209C1.85482 9.50468 1.78234 9.61857 1.69075 9.74347C1.5993 9.86853 1.53011 9.95674 1.48322 10.0081C1.43639 10.0595 1.35938 10.1442 1.25217 10.2625C1.1451 10.3808 1.07586 10.4579 1.04465 10.4936C1.04012 10.4959 1.02229 10.5159 0.991052 10.554C0.959834 10.5919 0.944166 10.6108 0.944166 10.6108L0.903988 10.671C0.881636 10.7043 0.871598 10.7256 0.873802 10.7344C0.876054 10.7434 0.871598 10.7657 0.860433 10.8014C0.849245 10.8372 0.850395 10.864 0.863764 10.8818V10.8885C0.881636 10.9644 0.917311 11.0258 0.970881 11.0727C1.02445 11.1194 1.08482 11.1428 1.15172 11.1428H1.18523C1.47548 11.107 1.72992 11.0581 1.94863 10.9955C3.11832 10.6965 4.14514 10.1563 5.02903 9.37498C5.36382 9.4107 5.68749 9.42852 5.99995 9.42852C7.08923 9.42852 8.09377 9.23772 9.01338 8.8559C9.93299 8.47415 10.6607 7.95421 11.1964 7.29577C11.7321 6.63736 12 5.91969 12 5.1429C12 4.36622 11.7322 3.64854 11.1964 2.99007ZM10.443 6.85056C9.97638 7.37725 9.34693 7.79585 8.55454 8.10606C7.76215 8.4162 6.91053 8.57144 5.99984 8.57144C5.72755 8.57144 5.43739 8.55362 5.12936 8.51783L4.74766 8.47777L4.45971 8.7323C3.91068 9.21447 3.29678 9.59611 2.61822 9.87737C2.82354 9.51584 2.97979 9.13187 3.08698 8.72571L3.26777 8.08277L2.6852 7.74807C2.10484 7.41753 1.65512 7.02583 1.33586 6.57267C1.01664 6.11964 0.857103 5.64297 0.857103 5.14302C0.857103 4.53139 1.09036 3.96224 1.55685 3.43545C2.02348 2.90871 2.65286 2.49016 3.4453 2.1799C4.23774 1.86962 5.08921 1.71435 5.99998 1.71435C6.91067 1.71435 7.76212 1.86955 8.55451 2.17981C9.34688 2.49009 9.97633 2.90862 10.443 3.43536C10.9095 3.96215 11.1428 4.53132 11.1428 5.1429C11.1428 5.75448 10.9095 6.32377 10.443 6.85056Z"
        fill="currentColor"
      />
      <ellipse cx="3.75" cy="5.25" rx="0.75" ry="0.75" fill="currentColor" />
      <ellipse cx="6" cy="5.25" rx="0.75" ry="0.75" fill="currentColor" />
      <ellipse cx="8.25" cy="5.25" rx="0.75" ry="0.75" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Share = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M9.5082 7.7093C8.81801 7.7093 8.20256 8.03821 7.80887 8.54651L4.51236 6.70515C4.5896 6.48339 4.63196 6.24419 4.63196 5.99751C4.63196 5.74834 4.5896 5.51163 4.50986 5.28738L7.80389 3.4485C8.19508 3.9593 8.81302 4.2907 9.50571 4.2907C10.6868 4.2907 11.6511 3.3289 11.6511 2.14535C11.6511 0.961794 10.6893 0 9.50571 0C8.32216 0 7.36036 0.961794 7.36036 2.14535C7.36036 2.39452 7.40272 2.63372 7.48246 2.85548L4.19093 4.69435C3.79973 4.18106 3.18179 3.85216 2.4891 3.85216C1.30804 3.85216 0.34375 4.81395 0.34375 5.99751C0.34375 7.18106 1.30804 8.14286 2.49159 8.14286C3.18428 8.14286 3.80222 7.81146 4.19591 7.29817L7.48993 9.13953C7.4102 9.36379 7.36535 9.60548 7.36535 9.85465C7.36535 11.0357 8.32714 12 9.5107 12C10.6943 12 11.656 11.0382 11.656 9.85465C11.656 8.6711 10.6918 7.7093 9.5082 7.7093ZM9.5082 0.675249C10.3205 0.675249 10.9808 1.33555 10.9808 2.14784C10.9808 2.96013 10.3205 3.62043 9.5082 3.62043C8.69591 3.62043 8.03561 2.96013 8.03561 2.14784C8.03561 1.33555 8.6984 0.675249 9.5082 0.675249ZM2.49159 7.4701C1.6793 7.4701 1.019 6.8098 1.019 5.99751C1.019 5.18522 1.6793 4.52492 2.49159 4.52492C3.30388 4.52492 3.96418 5.18522 3.96418 5.99751C3.96418 6.8098 3.30139 7.4701 2.49159 7.4701ZM9.5082 11.3248C8.69591 11.3248 8.03561 10.6645 8.03561 9.85216C8.03561 9.03987 8.69591 8.37957 9.5082 8.37957C10.3205 8.37957 10.9808 9.03987 10.9808 9.85216C10.9808 10.6645 10.3205 11.3248 9.5082 11.3248Z"
      fill="currentColor"
    />
  </svg>
);

const Favorite = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M9.78713 11.1829L9.12341 7.31294L11.9353 4.57193M9.78713 11.1829L11.8159 4.20549C11.8969 4.2173 11.9641 4.27401 11.9894 4.35176C12.0148 4.4293 11.9937 4.51458 11.9353 4.57193M9.78713 11.1829C9.80109 11.2635 9.76801 11.3449 9.70185 11.393M9.78713 11.1829L11.7435 4.70023L11.1725 4.61724M11.9353 4.57193L11.7849 4.4187L11.7847 4.4185L11.585 4.21511L11.5863 4.21389L11.7849 4.41766L11.8159 4.20552L11.785 4.41777L11.7855 4.41824L11.7856 4.41838L11.9353 4.57193ZM9.70185 11.393L9.57596 11.2195L9.57573 11.2192L9.57572 11.2192L9.57555 11.219L9.57554 11.2189L9.40818 10.9883C9.45774 10.9524 9.51673 10.934 9.57555 10.934C9.62018 10.934 9.66574 10.9445 9.70812 10.9667L9.19664 10.6978M9.70185 11.393L9.57573 11.2196L9.57561 11.2194L9.57555 11.2193L9.57548 11.2192L9.57543 11.2191L9.40777 10.9886C9.32038 11.0522 9.27606 11.1601 9.29432 11.2674L9.19664 10.6978M9.70185 11.393C9.66426 11.4203 9.62002 11.434 9.57555 11.434C9.5414 11.434 9.50682 11.4259 9.47546 11.4093L6.00006 9.58226L2.52423 11.4093C2.45228 11.4478 2.36443 11.4415 2.29805 11.393C2.23211 11.3449 2.19903 11.2635 2.21278 11.1829L2.87671 7.31272L0.0648214 4.57193L2.80332 10.6977M9.19664 10.6978L8.6306 7.39746L8.58617 7.13838L8.7744 6.9549L11.1725 4.61724M9.19664 10.6978L6.23272 9.13969L6.00008 9.01738L5.76742 9.13968L2.80332 10.6977M11.1725 4.61724L7.85831 4.13559L7.59818 4.09779L7.48185 3.86207L6.00005 0.859651L4.51805 3.8623L4.40172 4.098L4.1416 4.13581L0.827805 4.6174M11.1725 4.61724L0.827805 4.6174M2.80332 10.6977L3.36952 7.39726L3.41396 7.13816L3.22571 6.95467L0.827805 4.6174M2.80332 10.6977L0.827805 4.6174"
      stroke="currentColor"
    />
  </svg>
);

export class Article extends Component {
  render() {
    switch (this.props.type) {
      case "type2":
        return this.renderType2();
        break;
      case "type3":
        return this.renderType3();
        break;
      case "type4":
        return this.renderType4();
        break;
      default:
        return this.renderDefault();
    }
  }

  renderType2() {
    const publishedAtDate = moment(this.props.publishedAt);
    return (
      <div className={`${styles.articleTemplate2} ${styles[this.props.size]}`}>
        <div className={styles.authorsContainer}>
          <Avatar
            avatarUrl={this.props.avatarUrl}
            avatarName={this.props.authorName}
            avatarSignature={this.props.authorSignature}
          />
        </div>
        <div className={styles.content}>
          {this.props.publishedAt && (
            <div className={styles.publishedAt}>
              {publishedAtDate.format("DD MMM YYYY [at] hh:mm")}
            </div>
          )}
          <div className={styles.category}>{this.props.category}</div>
          <div className={styles.community}>{this.props.community}</div>

          <div className={styles.title}>{this.props.title}</div>
          <div className={styles.summary}>{this.props.summary}</div>
          <div className={styles.actionsContainer}>
            <div className={`${styles.action} ${styles.activeAction}`}>
              <Like />
              <span className={styles.actionCount}>{this.props.likeCount}</span>
            </div>
            <div className={styles.action}>
              <Dislike />
              <span className={styles.actionCount}>
                {this.props.disLikeCount}
              </span>
            </div>
            <div className={styles.action}>
              <Comment />
              <span className={styles.actionCount}>
                {this.props.commentCount}
              </span>
            </div>
            <div className={styles.action}>
              <Share />
              <span className={styles.actionCount}>
                {this.props.shareCount}
              </span>
            </div>
            <div className={styles.action}>
              <Favorite />
              <span className={styles.actionCount}>
                {this.props.favoriteCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderType3() {
    const publishedAtDate = moment(this.props.publishedAt);
    return (
      <div className={`${styles.articleTemplate3} ${styles[this.props.size]}`}>
        <div className={styles.authorsContainer}>
          <Avatar
            avatarUrl={this.props.avatarUrl}
            avatarName={this.props.authorName}
            avatarSignature={this.props.authorSignature}
          />
        </div>
        <div className={styles.row}>
          <div
            className={`${styles.col6} ${styles.contentImg}`}
            style={{ backgroundImage: `url(${this.props.url})` }}
          ></div>
          <div className={`${styles.col6} ${styles.articleTemplate2}`}>
            <div className={styles.content}>
              {this.props.publishedAt && (
                <div className={styles.publishedAt}>
                  {publishedAtDate.format("DD MMM YYYY [at] hh:mm")}
                </div>
              )}
              <div className={styles.category}>{this.props.category}</div>
              <div className={styles.community}>{this.props.community}</div>

              <div className={styles.title}>{this.props.title}</div>
              <div className={styles.summary}>{this.props.summary}</div>
              <div className={styles.actionsContainer}>
                <div className={`${styles.action} ${styles.activeAction}`}>
                  <Like />
                  <span className={styles.actionCount}>
                    {this.props.likeCount}
                  </span>
                </div>
                <div className={styles.action}>
                  <Dislike />
                  <span className={styles.actionCount}>
                    {this.props.disLikeCount}
                  </span>
                </div>
                <div className={styles.action}>
                  <Comment />
                  <span className={styles.actionCount}>
                    {this.props.commentCount}
                  </span>
                </div>
                <div className={styles.action}>
                  <Share />
                  <span className={styles.actionCount}>
                    {this.props.shareCount}
                  </span>
                </div>
                <div className={styles.action}>
                  <Favorite />
                  <span className={styles.actionCount}>
                    {this.props.favoriteCount}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderType4() {
    const publishedAtDate = moment(this.props.publishedAt);
    return (
      <div className={`${styles.articleTemplate4} ${styles[this.props.size]}`}>
        <div className={styles.authorsContainer}>
          <Avatar
            avatarUrl={this.props.avatarUrl}
            avatarName={this.props.authorName}
            avatarSignature={this.props.authorSignature}
          />
        </div>
        <div class={styles.articleContainer}>
          {this.props.publishedAt && (
            <div className={styles.publishedAt}>
              {publishedAtDate.format("DD MMM YYYY [at] hh:mm")}
            </div>
          )}
          <div
            class={styles.contentImg}
            style={{ backgroundImage: `url(${this.props.url})` }}
          ></div>
          <div className={styles.content}>
            <div className={styles.category}>{this.props.category}</div>
            <div className={styles.community}>{this.props.community}</div>

            <div className={styles.title}>{this.props.title}</div>
            <div className={styles.summary}>{this.props.summary}</div>
            <div className={styles.actionsContainer}>
              <div className={`${styles.action} ${styles.activeAction}`}>
                <Like />
                <span className={styles.actionCount}>
                  {this.props.likeCount}
                </span>
              </div>
              <div className={styles.action}>
                <Dislike />
                <span className={styles.actionCount}>
                  {this.props.disLikeCount}
                </span>
              </div>
              <div className={styles.action}>
                <Comment />
                <span className={styles.actionCount}>
                  {this.props.commentCount}
                </span>
              </div>
              <div className={styles.action}>
                <Share />
                <span className={styles.actionCount}>
                  {this.props.shareCount}
                </span>
              </div>
              <div className={styles.action}>
                <Favorite />
                <span className={styles.actionCount}>
                  {this.props.favoriteCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderDefault() {
    const publishedAtDate = moment(this.props.publishedAt);
    return (
      <div
        className={`${styles.article} ${styles[this.props.size]}`}
        onClick={this.props.openArticleReveal}
      >
        <div className={styles.authorsContainer}>
          <Avatar
            avatarUrl={this.props.avatarUrl}
            avatarName={this.props.authorName}
            avatarSignature={this.props.authorSignature}
          />
        </div>
        <div
          className={styles.content}
          style={{ backgroundImage: `url(${this.props.url})` }}
        >
          {this.props.publishedAt && (
            <div className={styles.publishedAt}>
              {publishedAtDate.format("DD MMM YYYY [at] hh:mm")}
            </div>
          )}
          <div className={styles.category}>{this.props.category}</div>
          <div className={styles.community}>{this.props.community}</div>
          <div className={styles.title}>{this.props.title}</div>
          {this.props.size === "large" && this.props.showSummary && (
            <div className={styles.summary}>{this.props.summary}</div>
          )}
          <div className={styles.actionsContainer}>
            <div className={`${styles.action} ${styles.activeAction}`}>
              <Like />
              <span className={styles.actionCount}>{this.props.likeCount}</span>
            </div>
            <div className={styles.action}>
              <Dislike />
              <span className={styles.actionCount}>
                {this.props.disLikeCount}
              </span>
            </div>
            <div className={styles.action}>
              <Comment />
              <span className={styles.actionCount}>
                {this.props.commentCount}
              </span>
            </div>
            <div className={styles.action}>
              <Share />
              <span className={styles.actionCount}>
                {this.props.shareCount}
              </span>
            </div>
            <div className={styles.action}>
              <Favorite />
              <span className={styles.actionCount}>
                {this.props.favoriteCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  type: PropTypes.oneOf(["default", "type2", "type3", "type4"]),
  size: PropTypes.oneOf(["small", "smallBH", "medium", "large"]),
  publishedAt: PropTypes.string,
  category: PropTypes.string,
  community: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  showSummary: PropTypes.bool,
  url: PropTypes.string,
  avatarUrl: PropTypes.string,
  authorName: PropTypes.string,
  authorSignature: PropTypes.string,
  likeCount: PropTypes.number,
  disLikeCount: PropTypes.number,
  commentCount: PropTypes.number,
  shareCount: PropTypes.number,
  favoriteCount: PropTypes.number,
};
Article.defaultProps = {
  type: "default",
  size: "small",
  showSummary: false,
  likeCount: 0,
  disLikeCount: 0,
  commentCount: 0,
  shareCount: 0,
  favoriteCount: 0,
};