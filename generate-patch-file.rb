#! /usr/bin/env ruby

require 'json'

# Goal: go through a repository, parse titles of the form:
# Step 8.2: Step content
#
# Generate a dictionary where the keys are step numbers,
# and the values are the title of the commit and the sha of the commit
#
# Output a file with VAR_NAME = <JSON blob> that can be included in this
# package

# Usage: ./map-commits-to-steps.rb <repo path> <output path> <var name> <patch output>

# Methodology: calls git log and parses output

view_type = ARGV[0]

tutorial_root = File.realpath(File.join File.dirname(__FILE__))

repo = File.join tutorial_root, "code"
out_patch_file = File.join tutorial_root, "generated", ("intermediate.multi.patch")

Dir.chdir repo

log_output = `git log --pretty=oneline`

puts log_output

first_commit = log_output.lines.last.split[0]
puts "first commit: " + first_commit
puts "writing patches to: " + out_patch_file

`git format-patch --stdout #{first_commit} > #{out_patch_file}`
