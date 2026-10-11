/** @type {import('next').NextConfig} */
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // output: 'standalone',
};

export default withVanillaExtract(nextConfig);
