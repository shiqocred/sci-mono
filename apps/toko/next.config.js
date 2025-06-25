//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  nx: {},
  webpack: (config) => {
    config.resolve.alias['@tainext/ui'] = path.resolve(
      __dirname,
      '../../libs/ui/src'
    );
    config.resolve.alias['@tainext/utils'] = path.resolve(
      __dirname,
      '../../libs/utils/src'
    );
    config.resolve.alias['@tainext/db'] = path.resolve(
      __dirname,
      '../../libs/db/src'
    );
    config.resolve.alias['@tainext/auth'] = path.resolve(
      __dirname,
      '../../libs/auth/src'
    );
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
