Description


Type of change

-update endpoints
    PUT /api/auth/:id/update is now PUT /api/auth
    update
    GET /api/user/:id is now GET /api/user
    GET /user/:id/trips is now GET /user/trips

-add endpoints
    GET / trip/list/types
    add api documentation in readme


Change status

   Complete, tested, ready to review and merge
x  Complete, but not tested (may need new tests)
   Incomplete/work-in-progress, PR is for discussion/feedback

How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration

   Test A
   Test B

Checklist:

x   My code follows the style guidelines of this project
x   I have performed a self-review of my own code
x   My code has been reviewed by at least one peer
   I have commented my code, particularly in hard-to-understand areas
x   I have made corresponding changes to the documentation
   My changes generate no new warnings
   I have added tests that prove my fix is effective or that my feature works
   New and existing unit tests pass locally with my changes
   There are no merge conflicts