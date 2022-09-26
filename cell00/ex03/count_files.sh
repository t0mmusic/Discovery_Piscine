#bin/bash
ls | wc -l | awk '{gsub(/^ +| +$/,"")} {print $0}'
