{
  mkShellNoCC,
  eslint_d,
  prettierd,
  nodejs,
}:
mkShellNoCC {
  name = "node";
  packages = [
    eslint_d
    prettierd
    nodejs
  ];
}
