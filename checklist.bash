#!/bin/bash

USE_OS=`uname`
case $USE_OS in
  Linux*) echo "env: Linux" ;;
  Darwin*) echo "env: Mac OSX" ;;
  *) echo "env: Windows or else detected. exits"; exit 1 ;;
esac

check_file() {
  TARGET=$1
  if [ -f $TARGET ]; then
    echo "✅ $TARGET"
  fi
  if [ ! -f $TARGET ]; then
    echo "❌ $TARGET"
  fi
}

check_dir() {
  TARGET=$1
  if [ -d $TARGET ]; then
    echo "✅ $TARGET"
  fi
  if [ ! -d $TARGET ]; then
    echo "❌ $TARGET"
  fi
}

check_command() {
  TEST_COMMAND=$1
  type $1 2>/dev/null

  if [ $? == 0 ]; then
    echo "✅ $TEST_COMMAND - is installed"
  else
    echo "❌ $TEST_COMMAND - is NOT installed"
  fi
}

check_file ~/.alias
check_file ~/.gitconfig
check_dir ~/.bash-git-prompt
check_file ~/UserLib/bin/lsmod
check_command go
check_command gvm
check_command node
check_command uv
check_command claude
