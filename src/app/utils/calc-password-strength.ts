import zxcvbn from 'zxcvbn';

export default function calcPasswordStrength(password: string): number {
    if (!password) return 0;

    const result = zxcvbn(password);
    const WEAK_PASS = result.score <= 1;
    const MEDIUM_PASS = result.score <= 3;

    if (WEAK_PASS) {
        return 30
    } else if (MEDIUM_PASS) {
        return 60
    } else {
        return 100
    }
}