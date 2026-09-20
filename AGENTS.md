# AGENTS.md

## Core Principles

- Think in English and respond in Japanese.
- Ask questions when requirements are ambiguous, as needed:
  - When multiple reasonable options exist.
- Create an implementation plan and obtain the user's approval before proceeding.
  - However, you may handle minor changes, such as typo fixes or edits of only a few lines, autonomously.

## Coding

- Follow the existing design, naming conventions, and style.
- Keep the scope of changes minimal.
  - Include any test and documentation updates required to verify the changes.
- Do not perform unnecessary refactoring.
- Do not add new dependencies without good reason when the task can be completed with existing dependencies or the standard library.
- Do not hard-code secrets, API keys, or tokens in the code.
- Do not edit files that meet either of the following conditions:
  - The filename contains `generated`.
  - The beginning of the file contains `DO NOT EDIT`.

## Git

- Create commits only when explicitly requested.
- Do not revert the user's uncommitted changes without permission.
