import { ManifestEntry } from "./asset-manifest";
import { isDockerImageEntry, ManifestDockerImageEntry } from "./docker-entry";
import { isFileEntry, ManifestFileEntry } from "./file-entry";

/**
 * Static class so that this is accessible via JSII
 */
export class StandardManifestEntries {
  /**
   * Return whether the given manifest entry is for a file asset
   *
   * Will throw if the manifest entry is for a file asset but malformed.
   */
  public static isFileEntry(entry: ManifestEntry): entry is ManifestFileEntry {
    return isFileEntry(entry);
  }

  /**
   * Return whether the given manifest entry is for a docker image asset
   *
   * Will throw if the manifest entry is for a file asset but malformed.
   */
  public static isDockerImageEntry(entry: ManifestEntry): entry is ManifestDockerImageEntry {
    return isDockerImageEntry(entry);
  }
}
