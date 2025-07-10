const { spawnSync } = require('child_process');
const path = require('path');

const CLI_PATH = path.join(__dirname, '../src/cli/index.js');

describe('CLI integration', () => {
  it('prints filtered data', () => {
    const result = spawnSync('node', [CLI_PATH, '--filter=ry'], { encoding: 'utf8' });
    expect(result.stdout).toMatch(/Oryx|John Dory/); // au moins un animal filtré attendu
    expect(result.status).toBe(0);
  });

  it('prints counted data', () => {
    const result = spawnSync('node', [CLI_PATH, '--count'], { encoding: 'utf8' });
    expect(result.stdout).toMatch(/\[.*\]/); // vérifie qu'il y a bien des crochets de comptage
    expect(result.status).toBe(0);
  });

  it('shows usage when no args', () => {
    const result = spawnSync('node', [CLI_PATH], { encoding: 'utf8' });
    expect(result.stdout).toMatch(/Usage/);
    expect(result.status).toBe(1);
  });
});
