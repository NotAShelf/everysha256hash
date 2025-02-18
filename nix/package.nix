{
  lib,
  buildNpmPackage,
}:
buildNpmPackage {
  pname = "everysha256hash";
  version = "0.1.0";

  src = ../.;

  npmDepsHash = lib.fakeSha256;
}
