import {spawn} from 'child_process';
import {Observable, Subject} from 'rxjs';

export function buildTarget(projectDir: string, workspaceTarget: string, flags: string[])
    : Observable<void> {

  const doneSubject = new Subject<void>();
  const buildProcess = spawn('bazel', ['build', workspaceTarget, ...flags], {
    cwd: projectDir,
    stdio: 'inherit',
    shell: true,
  });

  buildProcess.once('close', (code: number) => {
    code === 0 ? doneSubject.next() : doneSubject.error('Could not build Bazel target.');
  });

  return doneSubject.asObservable();
}

