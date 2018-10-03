import {spawnSync} from 'child_process';

export function checkBazelInstallation(projectDir: string) {
  return spawnSync('bazel', ['version'], {cwd: projectDir, shell: true}).status === 0;
}

