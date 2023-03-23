# A Decentralized Voting Platform 

A **Smart Contract** which allows to conduct multiple elections at a time for organizations.
The **Creator** of a poll is required to add
- A unique string to identify the poll
* Candidates to contest in the election
+ Eligible Voters to vote in the election
- A time of start and a time of end of the election

The voters cannot vote **more than once** and also **before the starting time and after the ending time**. 
Once a poll is created, the creator of the poll **cannot delete** the poll any time **before the end time**.

All the participants(voters and candidates) in an election are uniquely identified by their **email addresses**.

Voters can view live vote count of each candidate during the poll.
Note: This platform allows multiple polls to be conducted by any number of organizations.

The contract is deployed at this address `0xe92F67D03637578E94345d51C3365477354aa604`