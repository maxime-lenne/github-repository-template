# N8Ninja Features

This document outlines the main features of the N8Ninja application organized by epics and user stories.

## Epics

### 1. Server Management
Manage connections to n8n servers, both self-hosted and cloud instances.

### 2. Workflows Management
View, filter, and manage workflows from connected n8n servers.

### 3. Workflow Management
Manage, view, active/unactive workflow.

### 4. Workflow Trigger Management
Interact with various workflow triggers (webhooks, schedules, etc.).

### 5. Execution Monitoring
Track and analyze workflow executions with detailed statistics.

### 6. Application Settings
Configure application preferences and language settings.

## User Stories

### 1. Server Management
- As a user, I want to add a new server connection with a name, URL, and API key
- As a user, I want to select a server from my saved connections
- As a user, I want to edit existing server connections
- As a user, I want to test a server connections
- As a user, I want to delete server connections I no longer need
- As a user, I want to switch between multiple server connections

### 2. Workflows Management
- As a user, I want to view a list of all workflows on the server
- As a user, I want to filter workflows by active/inactive status
- As a user, I want to filter workflows by tags
- As a user, I want to see workflow statistics and distribution by tags
- As a user, I want to identify workflows that can only be triggered manually

### 3. Workflows Management
- As a user, I want to view workflow details including creation and update dates
- As a user, I want to activate or deactivate workflow

### 4. Workflow Trigger Management
- As a user, I want to trigger webhook workflows directly from the app
- As a user, I want to share webhook URLs with others
- As a user, I want to view and edit schedule trigger settings
- As a user, I want to interact with chat-based triggers
- As a user, I want to trigger form workflows directly from the app
- As a user, I want to share form URLs with others
- As a user, I want to identify different trigger types in the workflow list

### 5. Execution Monitoring
- As a user, I want to view a list of recent workflow executions
- As a user, I want to filter executions by status (success, error, running, waiting)
- As a user, I want to filter executions by trigger mode
- As a user, I want to see execution statistics over time (24h, 7d, 30d)
- As a user, I want to view execution status distribution in a graph
- As a user, I want to see detailed execution information including duration

### 6. Application Settings
- As a user, I want to change the application language
- As a user, I want the app to remember my preferences between sessions

## Technical Features

- Multi-platform support (iOS, macOS, tvOS)
- Pagination for large data sets (workflows, executions)
- Adaptive UI for different device sizes
- Localization support for multiple languages
- As a user, I want the app to support both light and dark mode
- Secure API key storage
- Offline capability for viewing previously loaded data