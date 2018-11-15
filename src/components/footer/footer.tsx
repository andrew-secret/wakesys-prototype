import * as React from 'react';
import { Link } from 'gatsby';
import * as classnames from 'classnames';

import { Logo } from '../logo/logo';
import { SectionWrapper } from '../sectionWrapper/sectionWrapper';
import { Icon } from '../icon/icon';
import { facebookSign, instagramSign } from '../icon/iconList';

const styles = require('./footer.module.scss');

export const Footer: React.SFC = () => {
  return (
    <footer className={styles.footer}>
      <SectionWrapper>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>Company</h3>
          <Link className={styles.footerLink} to="/">
            About us
          </Link>
          <Link className={styles.footerLink} to="/">
            References
          </Link>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>Products</h3>
          <Link className={styles.footerLink} to="/">
            Full-size
          </Link>
          <Link className={styles.footerLink} to="/">
            Aqua-park
          </Link>
          <Link className={styles.footerLink} to="/">
            Surf-park
          </Link>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>Mail</h3>
          <a className={classnames(styles.footerLink, styles.footerEmailLink)} href="mailto:info@wakesys.com">
            info@wakesys.com
          </a>
          <h3 className={styles.footerHeadline}>Call us</h3>
          <span className={styles.footerLink}>+49 151 2666 5395</span>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerHeadline}>Social media</h3>
          <div>
            <a className={styles.footerSocialMediaLink} href="https://www.facebook.com/wakesys/" target="_blank">
              <Icon icon={facebookSign} />
            </a>
            <a className={styles.footerLink} href="https://www.instagram.com/wakesys" target="_blank">
              <Icon icon={instagramSign} />
            </a>
          </div>
        </div>
      </SectionWrapper>
      <div className={styles.footerBottom}>
        <SectionWrapper className={styles.footerBottomSectionWrapper}>
          <div className={styles.footerBottomLinks}>
            <Link className={styles.footerBottomLink} to="/">
              Terms of service
            </Link>
            <Link className={styles.footerBottomLink} to="/">
              Privacy policy
            </Link>
            <Link className={styles.footerBottomLink} to="/">
              Imprint
            </Link>
          </div>
          <Logo className={styles.footerBottomLogo} type="white" />
        </SectionWrapper>
      </div>
    </footer>
  );
};