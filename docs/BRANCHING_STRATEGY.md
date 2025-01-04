# Git Branching Strategy

## Main Branches

### `main`
- Production-ready code
- Protected branch
- Requires pull request and review to merge
- Only merges from `develop` or `hotfix/*` branches

### `develop`
- Main development branch
- Protected branch
- Requires pull request and review to merge
- All feature and bugfix branches are created from and merged back into `develop`

## Supporting Branches

### Feature Branches (`feature/*`)
- Created from: `develop`
- Merge back into: `develop`
- Naming convention: `feature/description-of-feature`
- Example: `feature/user-authentication`

### Bugfix Branches (`bugfix/*`)
- Created from: `develop`
- Merge back into: `develop`
- Naming convention: `bugfix/description-of-bug`
- Example: `bugfix/fix-login-validation`

### Release Branches (`release/*`)
- Created from: `develop`
- Merge back into: `develop` and `main`
- Naming convention: `release/version-number`
- Example: `release/1.0.0`

### Hotfix Branches (`hotfix/*`)
- Created from: `main`
- Merge back into: `main` and `develop`
- Naming convention: `hotfix/description-of-fix`
- Example: `hotfix/critical-security-fix`

## Workflow

1. Create a new feature/bugfix branch from `develop`
2. Work on your changes
3. Create a pull request to merge back into `develop`
4. After review and approval, merge into `develop`
5. When ready for release:
   - Create a release branch from `develop`
   - Test and make any final adjustments
   - Merge into `main` and back into `develop`

## Branch Protection Rules

- `main` and `develop` branches are protected
- Direct pushes to protected branches are not allowed
- Pull requests require at least one review
- Status checks must pass before merging
- Branch must be up to date before merging
