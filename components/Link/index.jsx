/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';
import useStyles from './styles';

const NextLinkComposed = forwardRef((props, ref) => {
  const {
    as,
    href,
    prefetch,
    ...rest
  } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...rest} />
    </NextLink>
  );
});

NextLinkComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string.isRequired,
  prefetch: PropTypes.bool,
};

NextLinkComposed.defaultProps = {
  as: '',
  prefetch: false,
};

const Link = ({
  activeClassName,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const router = useRouter();

  const linkClassName = classNames(className, {
    [classes.active]: router.asPath === rest.href && activeClassName,
  });

  return (
    <MuiLink component={NextLinkComposed} className={linkClassName} {...rest} />
  );
};

Link.propTypes = {
  activeClassName: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  activeClassName: 'active',
  className: '',
};

export default Link;
