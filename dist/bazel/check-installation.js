"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
function checkBazelInstallation(projectDir) {
    return child_process_1.spawnSync('bazel', ['version'], { cwd: projectDir, shell: true }).status === 0;
}
exports.checkBazelInstallation = checkBazelInstallation;
//# sourceMappingURL=check-installation.js.map