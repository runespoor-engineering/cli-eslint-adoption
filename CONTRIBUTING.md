# Contributing to Runespoor Stack

Thank you for taking an interest in contributing! We appreciate you! 🫶🏽

Below are the guidelines on how to help in the best possible way.

## Submitting an Issue

Before creating a new issue, please search through open issues using the
[GitHub issue search bar](https://docs.github.com/en/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests).
You might find the solution to your problem, or can verify that it is an already known issue.

We want a bug-free and best-performing project. That's why we take all reported issues to heart. But please be aware
that if we can't reproduce the problem, we won't have a way of locating and adequately fixing it.

Therefore, to solve the problem in the best possible way, please create a minimal repository that reproduces the
problem with the least possible code explaining and demonstrating the error.

Without enough information to reproduce the issue, we will close it because we can't recreate and solve it.

## Submitting a Pull Request (PR)

### Branch Organization

We adopt [trunk-based development](https://trunkbaseddevelopment.com/) therefore all Pull Requests are made against the
main branch because we do not use separate branches for development or for the versions we release.

### Good first issue

The issues marked with `~"good first issue"` label are a good starting point to familiarize yourself with the project.

Before solving the problem, please check with the maintainers that the issue is still relevant. Feel free to leave a
comment on the issue to show your intention to work on it and prevent other people from unintentionally duplicating
your effort.

### Sending a Pull Request

Before submitting a pull request, consider `MR checklist` is fully resolved. You could find it in the PR template.

## Local development

### Prerequisites

Clone repository:

```shell
git clone git@github.com:runespoor-engineering/cli-eslint-disable.git
```

Specify how to reconcile divergent branches.

```shell
git config pull.rebase false
```

Install [pnpm](https://pnpm.io/) globally:

```shell
npm install -g pnpm
```

Install package dependencies for the project.

```shell
pnpm install
```

If you want to open a PRs you could fork the repository. For more information read the following docs:
[Fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo),
[Contributing to projects](https://docs.github.com/en/get-started/quickstart/contributing-to-projects).

### Common commands

Install the dependencies described in your package.json files, and update the shrinkwrap file as needed.

```shell
pnpm update
```

Do a full, clean build of the project in the repository.

```shell
pnpm build
```

Asks a series of questions and then generates a <branchname>-<timestamp>.json file in the common folder used for CHANGELOG generation.

```shell
pnpm run changelog:change
```

Run linters throw all the project

```shell
pnpm run lint
```

Run linters throw all the project with autofix

```shell
pnpm run lint:fix
```

Run tests throw for the project

```shell
pnpm run test
```

Detect unimported files and packages:

```shell
pnpm run unimported
```

Check updates using `pnpm outdated`:

```shell
pnpm outdated
```

Generate change file:

```shell
pnpm run changelog:change
```

Verify change files:

```shell
pnpm run changelog:verify
```

Apply change files:

```shell
pnpm run changelog:apply
```

<!-- ## Conventional commits

We are using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) in this repo. To automate this
process we have integrated the [commitlint](https://github.com/conventional-changelog/commitlint) to check if your
commit messages meet the conventional commit format. -->

<!-- Running the `commit` command would ask you a few questions to generate the commit message following the next rules of
`@commitlint/config-conventional`. [Read more.](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional). -->
