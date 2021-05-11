---
slug: "/blog/test-page"
date: "2021-05-08"
title: "Linux File System Permissions"
---
These are notes for older IT professionals not to forget how Linux file system permissions work.

Owner, Group, All ... r-w-x ... 4,2,1

## Example 700
```bash
drwx------ 80 ubuntu ubuntu 12288 Apr  9 01:21 plugins
-rwx------  1 ubuntu ubuntu   130 Apr 10 14:16 queue.xml
-rwx------  1 ubuntu ubuntu   369 Apr  9 21:03 scriptApproval.xml
-rwx------  1 ubuntu ubuntu    64 Apr  9 01:16 secret.key
-rwx------  1 ubuntu ubuntu     0 Apr  9 01:16 secret.key.not-so-secret
drwx------  4 ubuntu ubuntu  4096 Apr  9 02:31 secrets
drwx------  2 ubuntu ubuntu  4096 Apr  9 01:21 updates
drwx------  2 ubuntu ubuntu  4096 Apr  9 01:16 userContent
drwx------  3 ubuntu ubuntu  4096 Apr  9 01:22 users
drwx------ 11 ubuntu ubuntu  4096 Apr  9 01:15 war
drwx------  2 ubuntu ubuntu  4096 Apr  9 01:21 workflow-libs
drwx------  3 ubuntu ubuntu  4096 Apr  9 02:31 workspace
```